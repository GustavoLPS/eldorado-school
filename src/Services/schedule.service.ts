import { Injectable, Inject } from "@nestjs/common"
import { Schedule } from 'src/Models/schedule.model'
import { SCHEDULE_REPOSITORY } from './../Constants/index'

@Injectable()
export class ScheduleService {
    constructor(@Inject(SCHEDULE_REPOSITORY) private readonly scheduleRepository: typeof Schedule) {}

    async findAll(): Promise<Schedule[]> {
        return await this.scheduleRepository.findAll()
    }

    async findById(id: number): Promise<Schedule> {
        return await this.scheduleRepository.findByPk(id)
    }

    async store(schedule: Schedule): Promise<Schedule> {
        return await this.scheduleRepository.create(schedule)
    }

    async update(schedule: Schedule): Promise<[number, Schedule[]]> {
        return await this.scheduleRepository.update(schedule, {
            where: {
                id: schedule.id
            }
        })
    }

    delete(id: number): string {
        return 'deletado'
    }
}