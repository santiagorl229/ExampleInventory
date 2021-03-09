import { Document, Schema, model } from 'mongoose';
import * as faker from 'faker';
import { Dates } from '@domain/entities/Date';
import { CreateUserDto } from '@application/dto/create-user.dto';

export class UserModel {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  schedule: Array<Dates>;

  constructor(user: CreateUserDto) {
    this._id = faker.random.uuid();
    this.fullName = user.fullName;
    this.email = user.email;
    this.phone = user.phone;
    this.schedule = user.schedule;
  }

  /* any method would be defined here*/
  save(): UserModel{
    return this;
  } 
}

// no necessary to export the schema (keep it private to the module)
var schema = new Schema({
  _id: { required: true, type: String},
  fullName: { required: true, type: String },
  email: { required: true, unique : true, dropDups: true,  type: String },
  phone: { required: true, unique : true, dropDups: true, type: String },
  schedule: { required: true, type: []}
})

// register each method at schema
schema.method('foo', UserModel.prototype.save)

// 2) Document
export type UserDocument  = UserModel & Document;

// 3) MODEL
export const mongooseUsersModel = model<UserDocument>('User', schema);