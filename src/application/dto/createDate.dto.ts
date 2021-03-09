import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateDateDto {
    
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nativeUrl: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  hour: string;

  @IsBoolean()
  @IsNotEmpty()
  asSoonAsPossible: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  schedule: Date;

}

