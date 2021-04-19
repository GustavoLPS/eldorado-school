import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Student } from "src/models/student.model";
import { StudentService } from "src/services/student.service";


@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService) {}

    @Get()
    async getStudents(): Promise<Student[]> {
        return await this.studentService.findAll()
    }

    @Get(':id')
    async getStudent(@Param() params): Promise<Student> {
        return await this.studentService.findById(params.id)
    }

    @Post()
    async store(@Body() student): Promise<Student> {
        return await this.studentService.store(student)
    }

    @Put()
    async update(@Body() student): Promise<[number, Student[]]> {
        return await this.studentService.update(student)
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `Student deletado ${params.id}`
    }
}