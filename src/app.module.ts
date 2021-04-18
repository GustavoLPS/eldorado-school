import { StudentModule } from './Modules/student.module';
import { DatabaseModule } from './Modules/database.module';
import { StudentController } from './Controllers/student.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './Services/student.service';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule, StudentModule
  ],
  controllers: [AppController, StudentController],
  providers: [AppService],
})
export class AppModule {}
