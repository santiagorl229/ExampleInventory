import {IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';
// tslint:disable-next-line: max-classes-per-file
export class Dates {
  // tslint:disable-next-line: variable-name
  readonly _id?: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  nativeUrl: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  hour: string;

  @IsBoolean()
  @IsNotEmpty()
  asSoonAsPossible: boolean;


  @IsString()
  @IsNotEmpty()
  schedule: Date;

}

