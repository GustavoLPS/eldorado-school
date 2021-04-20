import { Injectable, Inject } from "@nestjs/common"
import { Teacher } from '../models/teacher.model'
import { TEACHER_REPOSITORY } from '../constants/index'

@Injectable()
export class TeacherService {
    constructor(@Inject(TEACHER_REPOSITORY) private readonly teacherRepository: typeof Teacher) {}

    async findAll(): Promise<Teacher[]> {
        return await this.teacherRepository.findAll()
    }

    async findById(id: number): Promise<Teacher> {
        return await this.teacherRepository.findByPk(id)
    }

    async store(teacher: Teacher): Promise<Teacher> {
        return await this.teacherRepository.create(teacher)
    }

    async update(teacher: Teacher): Promise<[number, Teacher[]]> {
        return await this.teacherRepository.update(teacher, {
            where: {
                id: teacher.id
            }
        })
    }

    delete(id: number): string {
        return 'deletado'
    }
}