import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator'
export class CreateProductDto{
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    count: number;
    
    @IsString()
    @IsNotEmpty()
    serial: string;

    @IsNumber()
    @IsNotEmpty()
    purchasePrice: number;

    @IsNotEmpty()
    category: string;
    @IsNotEmpty()
    subcategory: string;
}