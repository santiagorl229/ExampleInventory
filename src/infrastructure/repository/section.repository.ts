import { CreateSectionDto } from "@application/dto/create-section.dto";
import { Section } from "@domain/entities/section";
import { SectionModel } from "@infrastructure/models/section.model";
import { Inject, Injectable } from "@nestjs/common";
import { SECTION_MODEL_PROVIDER } from "src/constants";



@Injectable()
export class ProductRepository{

    constructor(@Inject(SECTION_MODEL_PROVIDER) private readonly model: SectionModel) {}

    async createProduct(product: CreateSectionDto): Promise<Section>{
        
        let newProduct = new SectionModel(product);
        return await newProduct;
        
    }
    /*async getProducts(): Promise<ProductModel[]>{
        const products = await mongooseProductsModel.find().exec();         
        return products as ProductModel[]; 
        
    }*/
}