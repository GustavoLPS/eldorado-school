import { Teacher } from 'src/Models/teacher.model';
import { TEACHER_REPOSITORY } from './../Constants/index';

export const teachersProviders = [{
    provide: TEACHER_REPOSITORY,
    useValue: Teacher,
}];