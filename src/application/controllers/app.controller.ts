import { Controller, Post, Body, Req, Get} from '@nestjs/common';
import { ProductService } from 'src/domain/services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from 'src/domain/entities/product';
import { ProductModel } from '@infrastructure/models/product.model';
import { WareHouseService } from '@domain/services/warehouse.service';

// UserController
@Controller('product')
export class AppController {
  constructor(private readonly productService: ProductService) {}
  @Post('/createProduct')
  CreateProduct(@Body() createProductDto: CreateProductDto): Promise<Product>{
    console.log(createProductDto);
    return this.productService.createProduct(createProductDto);
  }

  @Get('/GetProducts')
  async ObtainProduct(): Promise<ProductModel[]> {
    return this.productService.ObtainProduct();
  }

}