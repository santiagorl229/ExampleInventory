import { CreateSectionDto } from "@application/dto/create-section.dto";
import { Section } from "@domain/entities/section";
import { mongooseSectionModel, SectionModel } from "@infrastructure/models/section.model";
import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "src/application/dto/create-product.dto";
import { PRODUCT_MODEL_PROVIDER, SECTION_MODEL_PROVIDER } from "src/constants";
import { mongooseProductsModel, ProductModel } from "../models/product.model";

@Injectable()
export class SectionRepository{

    constructor(@Inject(SECTION_MODEL_PROVIDER) private readonly model: SectionModel) {}

    async createSection(section: CreateSectionDto): Promise<Section>{
        let newSection = new SectionModel(section);
        let searchSection = await mongooseSectionModel.findOne({'name':newSection.name}).exec();
        let finalSection = (searchSection)? searchSection: newSection;
        
        if(finalSection){
            finalSection.name = newSection.name;
            finalSection.note = newSection.note;
            finalSection.product.push(newSection.product[0]);
        }

        try{
            mongooseSectionModel.findOneAndUpdate({ $or:[{'name':newSection.name}]} , finalSection, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
              if (error) return;
            });
          }
        catch (error){
            console.log(error.message);
        }


        return await finalSection;

    }
}