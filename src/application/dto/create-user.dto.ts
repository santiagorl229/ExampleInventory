import { Dates } from '@domain/entities/Date';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsEmail, IsArray} from 'class-validator';

/* istanbul ignore if  */
export class CreateUserDto  {
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsArray()  
  @IsNotEmpty()
  schedule: Array<Dates>;
}
