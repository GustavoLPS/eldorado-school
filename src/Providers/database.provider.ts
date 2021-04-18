import { Teacher } from './../Models/teacher.model';
import { User } from './../Models/user.model';

import { Sequelize } from 'sequelize-typescript';
import { Student } from 'src/Models/student.model';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../Constants';
import { databaseConfig } from './../Config/database.config';
import { Schedule } from 'src/Models/schedule.model';

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