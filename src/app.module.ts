import { ScheduleModule } from './modules/schedule.module';
import { ScheduleController } from './controllers/schedule.controller';
import { TeacherModule } from './modules/teacher.module';
import { TeacherController } from './controllers/teacher.controller';
import { StudentModule } from './modules/student.module';
import { DatabaseModule } from './modules/database.module';
import { StudentController } from './controllers/student.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule, StudentModule, TeacherModule, ScheduleModule, AuthModule
  ],
  controllers: [AppController, StudentController, TeacherController, ScheduleController],
  providers: [AppService],
})
export class AppModule {}
