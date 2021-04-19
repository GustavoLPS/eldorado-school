import { schedulesProviders } from '../providers/schedule.provider';
import { ScheduleService } from '../services/schedule.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [ScheduleService, ...schedulesProviders],
    exports: [ScheduleService],
})
export class ScheduleModule {}