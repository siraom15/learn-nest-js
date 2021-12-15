import { IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
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
