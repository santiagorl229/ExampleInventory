import { AppController } from '@application/controllers/app.controller';
import { WarehouseController } from '@application/controllers/warehouse.controller';
import { ProductService } from '@domain/services/product.service';
import { WareHouseService } from '@domain/services/warehouse.service';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { modelProviders } from '@infrastructure/models/';
import { ProductRepository } from '@infrastructure/repository/product.repository';
import { WarehouseRepository } from '@infrastructure/repository/warehouse.repository';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController,WarehouseController],
  providers: [AppService, 
    ProductService, 
    ProductRepository, 
    WareHouseService,
    WarehouseRepository,
    ...modelProviders],
})
export class AppModule {}
