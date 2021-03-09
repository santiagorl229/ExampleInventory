import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from 'src/application/dto/create-product.dto';
import { Products } from '../entities/product';
import { Warehouse } from '../entities/warehouse';
@Injectable()
export class WareHouseService {
    constructor(private readonly WareHouseRepository: WareHouseRepository){

    }
    async createWarehouse(createWarehouseDto: CreateWareHouseDto): Promise<Warehouse>{
        return await this.productRepository.createProduct();
    }
}