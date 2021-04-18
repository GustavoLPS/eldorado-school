import { Schedule } from 'src/Models/schedule.model';
import { SCHEDULE_REPOSITORY } from './../Constants/index';

export const schedulesProviders = [{
    provide: SCHEDULE_REPOSITORY,
    useValue: Schedule
}];