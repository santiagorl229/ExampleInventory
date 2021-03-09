import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
import { Warehouse } from './warehouse';
export class Sections{
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
    warehouse: Array<Warehouse>;

}