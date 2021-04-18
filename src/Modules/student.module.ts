import { studentsProviders } from './../Providers/student.provider';
import { StudentService } from './../Services/student.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [StudentService, ...studentsProviders],
    exports: [StudentService],
})
export class StudentModule {}