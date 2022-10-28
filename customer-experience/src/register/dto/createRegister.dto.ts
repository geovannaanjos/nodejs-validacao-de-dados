import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsNumberString, Contains } from "class-validator";

export class CreateRegisterDTO{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsEmail()
    @Contains('@')
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password:string

    @IsString()
    @Contains('.com')
    site:string

    @IsNumberString()
    @MaxLength(15)
    @MinLength(8)
    phone:string
}