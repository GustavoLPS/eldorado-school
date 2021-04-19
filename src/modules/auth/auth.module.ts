import { StudentModule } from './../student.module';
import { AuthController } from './../../controllers/auth/auth.controller';
import { UserModule } from './../user.module';
import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule,
        UserModule,
        StudentModule,
        JwtModule.register({
            secret: process.env.JWTKEY,
            signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
        }),
    ],
    providers: [
        AuthService,
        JwtStrategy
    ],
    controllers: [AuthController]
})
export class AuthModule {}
