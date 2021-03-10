import { AppController } from '@application/controllers/app.controller';
import { ProductService } from '@domain/services/product.service';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { modelProviders } from '@infrastructure/models/';
import { ProductRepository } from '@infrastructure/repository/product.repository';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, 
    ProductService, 
    ProductRepository, 
    ...modelProviders],
})
export class AppModule {}
