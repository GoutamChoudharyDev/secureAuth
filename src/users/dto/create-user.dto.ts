import { IsString, MinLength } from "class-validator";

// A DTO defines what data the client is allowed or expected to send to our API. and DTO its an "object"
export class CreateUserDto {
    // class-validator

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;
}