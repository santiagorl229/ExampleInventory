import { Document, Schema, model, Model } from 'mongoose';
import * as faker from 'faker';

export class DateModel {
  _id?: string;
  nativeUrl: string;
  message: string;
  type: string;
  hour: string;
  asSoonAsPosible: boolean;
  schedule: Date;

  constructor(user: DateModel | any) {
    this._id = faker.random.uuid();
    this.nativeUrl = user.nativeUrl;
    this.message = user.message;
    this.type = user.type;
    this.hour = user.hour;
    this.asSoonAsPosible = user.asSoonAsPosible;
    this.schedule = user.schedule;
  }

  /* any method would be defined here*/
  save(): DateModel{
    return this;
  } 
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  _id: { required: true, unique : true, dropDups: true, type: String},
  nativeUrl: { required: true, type: String },
  message: { required: true, type: String },
  type: { required: true, type: String },
  hour: { required: true, unique : true, dropDups: true, type: String },
  asSoonAsPosible: { required: true, type: Boolean },
  schedule: { required: true, type: String }
})

// register each method at schema
schema.method('foo', DateModel.prototype.save)

// 2) Document
export type UserDocument  = DateModel & Document;

// 3) MODEL
export const mongooseUsersModel = model<UserDocument>('Date', schema);