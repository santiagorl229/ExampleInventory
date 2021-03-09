import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator'
import { Warehouse } from 'src/domain/entities/warehouse';
export class CreateSectionDto{
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsNotEmpty()
    tag: string;

    @IsString()
    @IsNotEmpty()
    note: string;

    @IsArray()  
    @IsNotEmpty()
    warehouse: Array<Warehouse>;
}