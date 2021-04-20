import { UserService } from './../services/user.service';
import { usersProviders } from './../providers/user.provider';
import { Module } from '@nestjs/common';

@Module({
    providers: [UserService, ...usersProviders],
    exports: [UserService],
})
export class UserModule {}