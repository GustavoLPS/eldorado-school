import { AuthService } from 'src/services/auth/auth.service';
import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/dtos/user.dto';
import { User } from '../../models/user.model';
import { Student } from '../../models/student.model';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @UseGuards(AuthGuard('jwt'))
    @Post('login')
    async login(@Body() req) {
        console.log(req)
        return await this.authService.login(req);
    }

    @Post('signup')
    async signUp(@Body() user: any) {
        return await this.authService.create(user);
    }
}
