import { Controller, Post, Body, Req, Get, Put} from '@nestjs/common';
import { WareHouseService } from '@domain/services/warehouse.service';
import { CreateWarehouseDto } from '@application/dto/create-warehouse.dto';
import { Warehouse } from '@domain/entities/warehouse';
import { WarehouseModel } from '@infrastructure/models/warehouse.model';
import { CreateSectionDto } from '@application/dto/create-section.dto';
import { CreateProductDto } from '@application/dto/create-product.dto';

// UserController
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WareHouseService) {}
@Post('/createWarehouse')
  createWarehouse(@Body() createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>{
    return this.warehouseService.createWarehouse(createWarehouseDto);
  }
  


}