import { CreateWarehouseDto } from '@application/dto/create-warehouse.dto';
import { WarehouseRepository } from '@infrastructure/repository/warehouse.repository';
import { Injectable, Inject } from '@nestjs/common';
import { Warehouse } from '../entities/warehouse';
@Injectable()
export class WareHouseService {
    constructor(private readonly wareHouseRepository: WarehouseRepository){

    }
    async createWarehouse(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>{
        return await this.wareHouseRepository.createWarehouse(createWarehouseDto);
    }
}