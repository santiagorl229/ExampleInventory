import { Controller, Post, Body, Req} from '@nestjs/common';
import { ProductService } from 'src/domain/services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from 'src/domain/entities/product';

// UserController
@Controller('product')
export class AppController {
  constructor(private readonly productService: ProductService) {}
  @Post('/createProduct')
  signIn(@Body() createProductDto: CreateProductDto): Promise<Product>{
    console.log(createProductDto);
    return this.productService.createProduct(createProductDto);
  }
}

