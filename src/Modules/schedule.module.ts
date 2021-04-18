import { schedulesProviders } from './../Providers/schedule.provider';
import { ScheduleService } from './../Services/schedule.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [ScheduleService, ...schedulesProviders],
    exports: [ScheduleService],
})
export class ScheduleModule {}