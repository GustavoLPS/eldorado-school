import { AuthService } from 'src/services/auth/auth.service';
import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/dtos/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post('login')
    async login(@Request() req) {
        console.log(req)
        return await this.authService.login(req.user);
    }

    @Post('signup')
    async signUp(@Body() user: UserDto) {
        console.log(user)
        return await this.authService.create(user);
    }
}
