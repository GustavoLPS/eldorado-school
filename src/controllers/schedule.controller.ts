import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { Schedule } from "src/models/schedule.model";
import { ScheduleService } from '../services/schedule.service';

@Controller('schedules')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) {}
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getTeachers(): Promise<Schedule[]> {
        return await this.scheduleService.findAll()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getTeacher(@Param() params): Promise<Schedule> {
        return await this.scheduleService.findById(params.id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async store(@Body() schedule): Promise<Schedule> {
        return await this.scheduleService.store(schedule)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Body() schedule): Promise<[number, Schedule[]]> {
        return await this.scheduleService.update(schedule)
    }
}