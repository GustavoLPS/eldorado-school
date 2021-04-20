import { Student } from 'src/models/student.model';
import { STUDENT_REPOSITORY } from '../constants/index';

export const studentsProviders = [{
    provide: STUDENT_REPOSITORY,
    useValue: Student,
}];