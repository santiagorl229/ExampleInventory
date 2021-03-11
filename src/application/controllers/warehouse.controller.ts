import { Controller, Post, Body, Req, Get, Put} from '@nestjs/common';
import { WareHouseService } from '@domain/services/warehouse.service';
import { CreateWarehouseDto } from '@application/dto/create-warehouse.dto';
import { Warehouse } from '@domain/entities/warehouse';
import { WarehouseModel } from '@infrastructure/models/warehouse.model';

// UserController
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WareHouseService) {}
  @Post('/createWarehouse')
  CreateProduct(@Body() createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>{
    return this.warehouseService.createWarehouse(createWarehouseDto);
  }
  @Get('/GetWarehouse')
  async ObtainAllWarehouse(): Promise<WarehouseModel[]>{
    return this.warehouseService.ObtainAllWarehouse();
  }

}