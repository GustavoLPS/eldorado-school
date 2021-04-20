import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum typeUser {
    STUDENT = 'student',
    TEACHER = 'teacher',
}

export class UserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly phoneNumber: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(typeUser, {
        message: 'user type must be either student or teacher',
    })
    readonly typeUser: typeUser;
}