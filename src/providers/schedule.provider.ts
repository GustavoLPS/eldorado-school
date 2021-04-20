import { Schedule } from 'src/models/schedule.model';
import { SCHEDULE_REPOSITORY } from '../constants/index';

export const schedulesProviders = [{
    provide: SCHEDULE_REPOSITORY,
    useValue: Schedule
}];