import { Controller, Post, Body, Req, Get} from '@nestjs/common';
import { ProductService } from 'src/domain/services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from 'src/domain/entities/product';
import { ProductModel } from '@infrastructure/models/product.model';
import { WareHouseService } from '@domain/services/warehouse.service';
import { CreateWarehouseDto } from '@application/dto/create-warehouse.dto';
import { Warehouse } from '@domain/entities/warehouse';

// UserController
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WareHouseService) {}
  @Post('/createWarehouse')
  CreateProduct(@Body() createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>{
    console.log(createWarehouseDto);
    return this.warehouseService.createWarehouse(createWarehouseDto);
  }
}