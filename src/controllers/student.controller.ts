import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { Student } from "src/models/student.model";
import { StudentService } from "src/services/student.service";


@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getStudents(): Promise<Student[]> {
        return await this.studentService.findAll()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getStudent(@Param() params): Promise<Student> {
        return await this.studentService.findById(params.id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async store(@Body() student): Promise<Student> {
        return await this.studentService.store(student)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Body() student): Promise<[number, Student[]]> {
        return await this.studentService.update(student)
    }
}