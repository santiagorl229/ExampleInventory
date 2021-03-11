import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "src/application/dto/create-product.dto";
import { PRODUCT_MODEL_PROVIDER } from "src/constants";
import { Product } from "src/domain/entities/product";
import { mongooseProductsModel, ProductModel } from "../models/product.model";

@Injectable()
export class ProductRepository{

    constructor(@Inject(PRODUCT_MODEL_PROVIDER) private readonly model: ProductModel) {}

    async createProduct(product: CreateProductDto): Promise<Product>{
        
        let newProduct = new ProductModel(product);
        let searchProduct = await mongooseProductsModel.findOne({ $or:[{'name':newProduct.name}, {'serial':newProduct.serial}]}).exec();
        let finalProduct = (searchProduct)? searchProduct: newProduct;
        
        if(finalProduct == searchProduct){
            finalProduct.count = newProduct.count;
            finalProduct.purchasePrice = newProduct.purchasePrice;
        }

        try{
            mongooseProductsModel.findOneAndUpdate({ $or:[{'name':newProduct.name}, {'serial':newProduct.serial}]} , finalProduct, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
              if (error) return;
            });
          }
          catch (error) {
            console.log(error.message);
          }

        return await finalProduct;
        
    }
    async getProducts(): Promise<ProductModel[]>{
        const products = await mongooseProductsModel.find().exec();         
        return products as ProductModel[]; 
        
    }
}