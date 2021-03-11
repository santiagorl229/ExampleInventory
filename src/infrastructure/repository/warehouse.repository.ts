import { CreateSectionDto } from "@application/dto/create-section.dto";
import { CreateWarehouseDto } from "@application/dto/create-warehouse.dto";
import { Section } from "@domain/entities/section";
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
        
        if(searchWareHouse){
            finalWarehouse.name = newWareHouse.name;
            finalWarehouse.note = newWareHouse.note;
            finalWarehouse.sections.push(newWareHouse.sections[0]);
        }

        try{
            mongooseWarehouseModel.findOneAndUpdate({'name':finalWarehouse.name} , finalWarehouse, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
              if (error) return;
            });
          }
        catch (error){
            console.log(error.message);
        }

        return await finalWarehouse;
    }
    async ObtainAllWarehouse(): Promise<WarehouseModel[]>{
        const resultSection = await mongooseWarehouseModel.find().exec();  
        return resultSection;
    }

    async createSection(id: string, createSectionDto: CreateSectionDto): Promise<Section>{
        return
    }
    async getSections(): Promise<Section[]>{
        const warehouses = mongooseWarehouseModel.find().exec();
        let sections: Section[] = [];
        (await warehouses).forEach(function(warehouse){
            sections.concat(warehouse.sections)
        })
        return sections;
    }
}
