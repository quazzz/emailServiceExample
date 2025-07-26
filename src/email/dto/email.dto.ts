import { IsEmail, IsString } from "class-validator";

export class emailDto {
    @IsEmail()
    to: string;
    @IsString()
    subject: string;
    @IsString()
    msg: string;
}