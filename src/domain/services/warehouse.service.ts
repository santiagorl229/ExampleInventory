import { CreateProductDto } from '@application/dto/create-product.dto';
import { CreateSectionDto } from '@application/dto/create-section.dto';
import { CreateWarehouseDto } from '@application/dto/create-warehouse.dto';
import { Section } from '@domain/entities/section';
import { WarehouseModel } from '@infrastructure/models/warehouse.model';
import { WarehouseRepository } from '@infrastructure/repository/warehouse.repository';
import { Injectable, Inject } from '@nestjs/common';
import { Warehouse } from '../entities/warehouse';

@Injectable()
export class WareHouseService {
    constructor(private readonly wareHouseRepository: WarehouseRepository){

    }
 /*    async createWarehouse(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>{
        return await this.wareHouseRepository.createWarehouse(createWarehouseDto);
    }
    async createSection(id: string, createSectionDto: CreateSectionDto): Promise<Section>{
        return this.wareHouseRepository.createSection(id, createSectionDto)
    }
    async getSections(): Promise<Section[]> {
        return this.wareHouseRepository.getSections();
    }
 */
    async createWarehouse(createWarehouse: CreateWarehouseDto): Promise<Warehouse>{        
        return this.wareHouseRepository.createWarehouse(createWarehouse);
    }

    async addSection(createWarehouse: Warehouse, createService: CreateSectionDto): Promise<Warehouse>{
        return this.wareHouseRepository.addSection(createWarehouse, createService);
    }
    async updateWarehouseOnDatabase(warehouse: Warehouse): Promise<Warehouse>{
        return this.wareHouseRepository.updateWarehouseOnDatabase(warehouse);   
    }

    async updateWarehouse(createWarehouse: CreateWarehouseDto): Promise<Warehouse>{
        return this.wareHouseRepository.updateWarehouse(createWarehouse);
    }
    async saveOnDataBaseWarehouse(createWarehouse: CreateWarehouseDto): Promise<Warehouse>{
        return this.wareHouseRepository.saveOnDataBaseWarehouse(createWarehouse);
    }

}