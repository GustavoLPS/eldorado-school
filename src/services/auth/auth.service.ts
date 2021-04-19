import { User } from './../../models/user.model';
import { Student } from '../../models/student.model';
import { StudentService } from '../student.service';
import { UserService } from './../user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly studentService: StudentService
    ) {}

    async validateUser(username: string, pass: string) {
        // find if user exist with this email
        const user = await this.userService.findOneByLogin(username);
        if (!user) {
            return null;
        }

        // find if user password match
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user['dataValues'];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
        // hash the password
        console.log(user)
        const pass = await this.hashPassword(user.password);

        const userNew = new User()
        userNew.setAttributes('login', user.email)
        userNew.setAttributes('password', pass)

        // create the user
        const newUser = await this.userService.store(userNew);
        console.log(newUser)

        // tslint:disable-next-line: no-string-liuser.nameteral
        const { password, ...result } = newUser['dataValues'];

        // generate token
        const token = await this.generateToken(result);
        const student = new Student()
        student.setAttributes('name', user.name)
        student.setAttributes('email', user.name)
        student.setAttributes('phoneNumber', user.name)
        student.setAttributes('userId', newUser.id)

        const newStudent: Student =  await this.studentService.store(student)

        // return the user and the token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}
