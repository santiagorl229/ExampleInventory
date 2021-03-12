import { CreateSectionDto } from "@application/dto/create-section.dto";
import { CreateWarehouseDto } from "@application/dto/create-warehouse.dto";
import { Section } from "@domain/entities/section";
import { Warehouse } from "@domain/entities/warehouse";
import { ProductModel } from "@infrastructure/models/product.model";
import { SectionModel } from "@infrastructure/models/section.model";
import { WarehouseModel, mongooseWarehouseModel } from "@infrastructure/models/warehouse.model";
import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "src/application/dto/create-product.dto";
import { WAREHOUSE_MODEL_PROVIDER } from "src/constants";
@Injectable()
export class WarehouseRepository{
    
    
    constructor(@Inject(WAREHOUSE_MODEL_PROVIDER) private readonly model: WarehouseModel) {}
    
/*     async createWarehouse(warehouseDto: CreateWarehouseDto): Promise<Warehouse>{
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
 */
/*     async getSections(): Promise<Section[]>{
        const warehouses = mongooseWarehouseModel.find().exec();
        let sections: Section[] = [];
        (await warehouses).forEach(function(warehouse){
            sections.concat(warehouse.sections)
        })
        return sections;
    } */
    async saveOnDataBaseWarehouse(warehouseDto: CreateWarehouseDto): Promise<Warehouse>{
        
        let newWareHouse = new WarehouseModel(warehouseDto);
        let searchWareHouse = await mongooseWarehouseModel.findOne({'name':newWareHouse.name}).exec();
        let finalWarehouse = (searchWareHouse)? searchWareHouse: newWareHouse;
                        
        if(searchWareHouse){
            finalWarehouse.name = newWareHouse.name;
            finalWarehouse.note = newWareHouse.note;
            finalWarehouse.sections.push(newWareHouse.sections[0]);
        }

        
        return finalWarehouse;
    }

    createWarehouse(warehouseDto: CreateWarehouseDto): Warehouse{
        let warehouse = new WarehouseModel(warehouseDto);
        return warehouse;
    }
    
    addSection(createWarehouse: Warehouse, createSectionDto: CreateSectionDto):  Warehouse {
        let section = new SectionModel(createSectionDto);
        createWarehouse.sections.push(section);
        return createWarehouse;
    }

    async updateWarehouse(warehouseDto: CreateWarehouseDto): Promise<Warehouse>{
        let newwarehouse = new WarehouseModel(warehouseDto);
        let searchWarehouse = await mongooseWarehouseModel.findOne({'name':newwarehouse.note}).exec();        
        if(searchWarehouse){
            searchWarehouse.note = newwarehouse.note; 
        }else{
            
        }
        return searchWarehouse;
    }

    async updateWarehouseOnDatabase(warehouse: Warehouse): Promise<Warehouse>{
        try{
            mongooseWarehouseModel.findOneAndUpdate({'_id':warehouse._id}, warehouse, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
              if (error) return;
            });
        }
          catch (error) {
            console.log(error.message);
        }
        return warehouse;
    }

}
