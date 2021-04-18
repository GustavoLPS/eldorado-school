import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Schedule } from "src/Models/schedule.model";
import { ScheduleService } from './../Services/schedule.service';

@Controller('schedules')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) {}

    @Get()
    async getTeachers(): Promise<Schedule[]> {
        return await this.scheduleService.findAll()
    }

    @Get(':id')
    async getTeacher(@Param() params): Promise<Schedule> {
        return await this.scheduleService.findById(params.id)
    }

    @Post()
    async store(@Body() schedule): Promise<Schedule> {
        return await this.scheduleService.store(schedule)
    }

    @Put()
    async update(@Body() schedule): Promise<[number, Schedule[]]> {
        return await this.scheduleService.update(schedule)
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `Teacher deletado ${params.id}`
    }
}