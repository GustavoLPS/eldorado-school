import { Injectable, Inject } from "@nestjs/common"
import { User } from '../models/user.model'
import { USER_REPOSITORY } from '../constants/index'

@Injectable()
export class UserService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll()
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findByPk(id)
    }

    async findOneByLogin(login: string): Promise<User> {
        return await this.userRepository.findOne({ where: {
                login: login
            }
        })
    }

    async store(user: User): Promise<User> {
        console.log(user)
        return await this.userRepository.create(user)
    }

    async update(user: User): Promise<[number, User[]]> {
        return await this.userRepository.update(user, {
            where: {
                id: user.id
            }
        })
    }

    delete(id: number): string {
        return 'deletado'
    }
}