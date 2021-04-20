import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { Teacher } from "src/models/teacher.model";
import { TeacherService } from '../services/teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private teacherService: TeacherService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getTeachers(): Promise<Teacher[]> {
        return await this.teacherService.findAll()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getTeacher(@Param() params): Promise<Teacher> {
        return await this.teacherService.findById(params.id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async store(@Body() teacher): Promise<Teacher> {
        return await this.teacherService.store(teacher)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Body() teacher): Promise<[number, Teacher[]]> {
        return await this.teacherService.update(teacher)
    }
}