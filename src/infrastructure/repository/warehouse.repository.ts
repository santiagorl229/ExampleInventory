import { CreateWarehouseDto } from "@application/dto/create-warehouse.dto";
import { Warehouse } from "@domain/entities/warehouse";
import { ProductModel } from "@infrastructure/models/product.model";
import { WarehouseModel, mongooseWarehouseModel } from "@infrastructure/models/warehouse.model";
import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "src/application/dto/create-product.dto";
import { WAREHOUSE_MODEL_PROVIDER } from "src/constants";
@Injectable()
export class WarehouseRepository{
    constructor(@Inject(WAREHOUSE_MODEL_PROVIDER) private readonly model: WarehouseModel) {}
    
    async createWarehouse(warehouseDto: CreateWarehouseDto): Promise<Warehouse>{
        let newWareHouse = new WarehouseModel(warehouseDto);
        let searchWareHouse = await mongooseWarehouseModel.findOne({'name':newWareHouse.name}).exec();
        let finalWarehouse = (searchWareHouse)? searchWareHouse: newWareHouse;
        
        if(finalWarehouse){
            finalWarehouse.name = newWareHouse.name;
            finalWarehouse.note = newWareHouse.note;
            finalWarehouse.section.push(newWareHouse.section[0]);
        }

        try{
            mongooseWarehouseModel.findOneAndUpdate({ $or:[{'name':newWareHouse.name}]} , finalWarehouse, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
              if (error) return;
            });
          }
        catch (error){
            console.log(error.message);
        }


        return await finalWarehouse;
    }
}
