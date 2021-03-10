import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
import { Section } from 'src/domain/entities/section';
export class CreateWarehouseDto{
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