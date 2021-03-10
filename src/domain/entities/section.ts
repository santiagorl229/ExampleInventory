import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
import { Product } from './product';
import { Warehouse } from './warehouse';
export class Section{
    readonly _id?: string;

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
    products: Array<Product>;

}