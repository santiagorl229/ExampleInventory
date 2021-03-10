import { CreateProductDto } from "src/application/dto/create-product.dto";
import * as faker from 'faker';
import { model, Schema, Document } from "mongoose";
import { CreateWarehouseDto } from "@application/dto/create-warehouse.dto";
import { Section } from "@domain/entities/section";

export class WarehouseModel {
    _id?: string;
    name: string;
    note: string;
    section: Array<Section>


  constructor(warehouse: CreateWarehouseDto) {
    this._id = faker.random.uuid();
    this.name = warehouse.name;
    this.note = warehouse.note;
    this.section = warehouse.section
  }
  save(): WarehouseModel{
    return this;
  } 
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  _id: { required: true, type: String},
  name: { required: true, type: String },
  note: { required: true, unique : true, dropDups: true,  type: String  },
  section: { required: true, type: []}
})

// register each method at schema
schema.method('foo', WarehouseModel.prototype.save)

// 2) Document
export type WarehouseDocument  = WarehouseModel & Document;

// 3) MODEL
export const mongooseWarehouseModel = model<WarehouseDocument>('Warehouse', schema);

