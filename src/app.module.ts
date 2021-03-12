import { AppController } from '@application/controllers/app.controller';
import { SectionController } from '@application/controllers/section.controller';
import { WarehouseController } from '@application/controllers/warehouse.controller';
/* import { ProductService } from '@domain/services/product.service';
import { SectionService } from '@domain/services/section.service'; */
import { WareHouseService } from '@domain/services/warehouse.service';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { modelProviders, sectionProviders, warehouseProviders } from '@infrastructure/models/';
/* import { ProductRepository } from '@infrastructure/repository/product.repository';
import { SectionRepository } from '@infrastructure/repository/section.repository'; */
import { WarehouseRepository } from '@infrastructure/repository/warehouse.repository';
import { Module, Provider } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [/* AppController, */WarehouseController/* , SectionController */],
  providers: [AppService, 
 /*    ProductService, 
    ProductRepository,  */
    WareHouseService,
    WarehouseRepository,
/*     SectionService,
    SectionRepository, */
    /* ...modelProviders, */
    ...warehouseProviders/* ,
    ...sectionProviders, */
  ]
})
export class AppModule {}
