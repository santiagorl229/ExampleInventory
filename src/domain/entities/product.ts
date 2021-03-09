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