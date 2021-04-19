import { Injectable, Inject } from "@nestjs/common"
import { Student } from "src/models/student.model"
import { STUDENT_REPOSITORY } from '../constants/index'

@Injectable()
export class StudentService {
    constructor(@Inject(STUDENT_REPOSITORY) private readonly studentRepository: typeof Student) {}

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.findAll()
    }

    async findById(id: number): Promise<Student> {
        return await this.studentRepository.findByPk(id)
    }

    async store(student: Student): Promise<Student> {
        return await this.studentRepository.create(student)
    }

    async update(student: Student): Promise<[number, Student[]]> {
        return await this.studentRepository.update(student, {
            where: {
                id: student.id
            }
        })
    }

    delete(id: number): string {
        return 'deletado'
    }
}