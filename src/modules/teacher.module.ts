import { teachersProviders } from '../providers/teacher.provider';
import { Module } from '@nestjs/common';
import { TeacherService } from 'src/services/teacher.service';

@Module({
    providers: [TeacherService, ...teachersProviders],
    exports: [TeacherService],
})
export class TeacherModule {}