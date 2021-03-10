import {IsArray, isArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
import { Section } from './section';
export class Warehouse{
    
    readonly _id?: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    note: string;

    @IsArray()
    @IsNotEmpty()
    section: Array<Section>

}