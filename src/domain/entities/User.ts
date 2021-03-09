import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { Dates } from './Date';

export class User {
  readonly _id?: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;


  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
  
  @IsArray()  
  @IsNotEmpty()
  schedule: Array<Dates>;
}


