import {IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class Warehouse{
    
    readonly _id?: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    note: string;


}