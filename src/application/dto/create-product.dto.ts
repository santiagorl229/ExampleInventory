import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator'
import { Sections } from 'src/domain/entities/section';
export class CreateProductDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    count: string;
    
    @IsString()
    @IsNotEmpty()
    serial: string;

    @IsNotEmpty()
    purchasePrice: number;

    @IsArray()  
    @IsNotEmpty()
    section: Array<Sections>;
}