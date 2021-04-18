import { Student } from 'src/Models/student.model';
import { STUDENT_REPOSITORY } from './../Constants/index';

export const studentsProviders = [{
    provide: STUDENT_REPOSITORY,
    useValue: Student,
}];