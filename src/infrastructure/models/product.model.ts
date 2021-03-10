import { CreateProductDto } from "src/application/dto/create-product.dto";
import * as faker from 'faker';
import { model, Schema, Document } from "mongoose";

export class ProductModel {
    _id?: string;
    name: string;
    count: number;
    serial: string;
    purchasePrice: number;
    category: string;
    subcategory: string;

  constructor(product: CreateProductDto) {
    this._id = faker.random.uuid();
    this.name = product.name;
    this.count = product.count;
    this.serial= product.serial;
    this.purchasePrice = product.purchasePrice;
    this.category = product.category;
    this.subcategory = product.subcategory;
  }
  save(): ProductModel{
    return this;
  } 
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  _id: { required: true, type: String},
  name: { required: true, type: String },
  count: { required: true, unique : true, dropDups: true,  type: Number  },
  serial: { required: true, unique : true, dropDups: true, type: String },
  purchasePrice : { required: true, unique : true, dropDups: true, type: Number },
  category : { required: true, unique : true, dropDups: true, type: String },
  subcategory: { required: true, unique : true, dropDups: true, type: String },
})

// register each method at schema
schema.method('foo', ProductModel.prototype.save)

// 2) Document
export type ProductDocument  = ProductModel & Document;

// 3) MODEL
export const mongooseProductsModel = model<ProductDocument>('Product', schema);

