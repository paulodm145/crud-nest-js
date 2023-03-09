import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsString({message: "Nome deve ser uma string"})
    nome: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string;

}