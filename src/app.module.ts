import { ScheduleModule } from './Modules/schedule.module';
import { ScheduleController } from './Controllers/schedule.controller';
import { TeacherModule } from './Modules/teacher.module';
import { TeacherController } from './Controllers/teacher.controller';
import { StudentModule } from './Modules/student.module';
import { DatabaseModule } from './Modules/database.module';
import { StudentController } from './Controllers/student.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule, StudentModule, TeacherModule, ScheduleModule
  ],
  controllers: [AppController, StudentController, TeacherController, ScheduleController],
  providers: [AppService],
})
export class AppModule {}
