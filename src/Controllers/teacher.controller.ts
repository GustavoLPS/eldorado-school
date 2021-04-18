import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Teacher } from "src/Models/teacher.model";
import { TeacherService } from './../Services/teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private teacherService: TeacherService) {}

    @Get()
    async getTeachers(): Promise<Teacher[]> {
        return await this.teacherService.findAll()
    }

    @Get(':id')
    async getTeacher(@Param() params): Promise<Teacher> {
        return await this.teacherService.findById(params.id)
    }

    @Post()
    async store(@Body() teacher): Promise<Teacher> {
        return await this.teacherService.store(teacher)
    }

    @Put()
    async update(@Body() teacher): Promise<[number, Teacher[]]> {
        return await this.teacherService.update(teacher)
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `Teacher deletado ${params.id}`
    }
}