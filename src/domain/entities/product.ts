import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { Transform } from 'node:stream';
import { Sections } from './section';
export class Products{
    readonly _id?: string;
    
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