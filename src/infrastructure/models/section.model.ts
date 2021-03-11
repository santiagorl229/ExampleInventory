import { CreateSectionDto } from "src/application/dto/create-section.dto";
import * as faker from 'faker';
import { model, Schema, Document } from "mongoose";
import { Product } from "@domain/entities/product";

export class SectionModel {
    find() {
        throw new Error("Method not implemented.");
    }
    _id?: string;
    name: string;
    location: string;
    tag: string;
    note: string;
    product: Array<Product>
    

  constructor(section: CreateSectionDto) {
    this._id = faker.random.uuid();
    this.name = section.name;
    this.location = section.location;
    this.tag= section.tag;
    this.note = section.note;
    this.product = section.product;
    
  }
  save(): SectionModel{
    return this;
  } 
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  _id: { required: true, type: String},
  name: { required: true, type: String },
  location: { required: true, unique : true, dropDups: true,  type: String  },
  tag: { required: true, unique : true, dropDups: true, type: String },
  note : { required: true, unique : true, dropDups: true, type: String },
  product : { required: true, unique : true, dropDups: true, type: String },
  
})

// register each method at schema
schema.method('foo', SectionModel.prototype.save)

// 2) Document
export type SectionDocument  = SectionModel & Document;

// 3) MODEL
export const mongooseSectionModel = model<SectionDocument>('Section', schema);

