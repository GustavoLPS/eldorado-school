import { studentsProviders } from '../providers/student.provider';
import { StudentService } from '../services/student.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [StudentService, ...studentsProviders],
    exports: [StudentService],
})
export class StudentModule {}