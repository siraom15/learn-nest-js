import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  id: string;
  
  @IsString()
  name: string;
  
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  age: number;

}
