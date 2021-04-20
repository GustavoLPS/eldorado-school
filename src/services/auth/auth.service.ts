import { User } from './../../models/user.model';
import { Student } from '../../models/student.model';
import { UserService } from './../user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string) {
        // find if user exist with this email
        console.log(username)
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
        const userLongin = await this.validateUser(user.login, user.password);
        const token = await this.generateToken(userLongin);
        return { userLongin, token };
    }

    public async create(user: any) {
        // hash the password
        const pass = await this.hashPassword(user.password);

        const userNew: User = User.build()
        userNew.setDataValue("login", user.email)
        userNew.setDataValue("password", pass)
        await userNew.save()

        // create the user
        // const newUser = await this.userService.store(userNew);

        // tslint:disable-next-line: no-string-liuser.nameteral
        const { password, ...result } = userNew['dataValues'];

        // generate token
        const token = await this.generateToken(result);
        const student = Student.build()
        student.setDataValue('name', user.name)
        student.setDataValue('email', user.email)
        student.setDataValue('phoneNumber', user.phoneNumber)
        student.setDataValue('userId', userNew.id)
        await student.save()

        // return the user and the token
        return { user: result, student: student, token };
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
