import { teachersProviders } from './../Providers/teacher.provider';
import { Module } from '@nestjs/common';
import { TeacherService } from 'src/Services/teacher.service';

@Module({
    providers: [TeacherService, ...teachersProviders],
    exports: [TeacherService],
})
export class TeacherModule {}