import {IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class CreateWarehouseDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    note: string;
}