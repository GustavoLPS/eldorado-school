import { Teacher } from '../models/teacher.model';
import { User } from '../models/user.model';

import { Sequelize } from 'sequelize-typescript';
import { Student } from 'src/models/student.model';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from '../config/database.config';
import { Schedule } from 'src/models/schedule.model';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Student, Teacher, Schedule]);
        await sequelize.sync();
        return sequelize;
    },
}];