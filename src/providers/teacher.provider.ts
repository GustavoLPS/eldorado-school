import { Teacher } from 'src/models/teacher.model';
import { TEACHER_REPOSITORY } from '../constants/index';

export const teachersProviders = [{
    provide: TEACHER_REPOSITORY,
    useValue: Teacher,
}];