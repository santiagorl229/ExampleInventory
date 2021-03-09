import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from 'src/application/dto/create-product.dto';
import { Products } from '../entities/product';
@Injectable()
export class UserService {
    constructor(private readonly productRepository: ProductRepository){

    }
    async createProduct(createProductDto: CreateProductDto): Promise<Products>{
        return await this.productRepository.createProduct(createProductDto);
    }
}