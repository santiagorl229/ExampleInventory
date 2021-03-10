import { ProductModel } from '@infrastructure/models/product.model';
import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from 'src/application/dto/create-product.dto';
import { ProductRepository } from 'src/infrastructure/repository/product.repository';
import { Product } from '../entities/product';
@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository){

    }
    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        console.log(createProductDto);
        return await this.productRepository.createProduct(createProductDto);
    }

    async ObtainProduct(): Promise<ProductModel[]>{
        return await this.productRepository.ObtainProduct()
    }
}