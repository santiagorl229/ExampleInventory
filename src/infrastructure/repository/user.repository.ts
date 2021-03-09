import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { UserModel, mongooseUsersModel } from '@infrastructure/models/user.model';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '@constants';


// Se inyecta el repo en el servicio
@Injectable()
export class UserRepository {

  constructor(@Inject(USER_MODEL_PROVIDER) private readonly model: User) {}

  async create(user: CreateUserDto): Promise<User> {

    //genero los modelos de los usuarios
    let myUser = new UserModel(user);
    let userFind = await mongooseUsersModel.findOne({ $or:[  {'email':myUser.email}, {'phone':myUser.phone}]}).exec();
    let finalUser = (userFind)? userFind: myUser;

    if(userFind){
      finalUser.schedule.push(myUser.schedule[0]);
      finalUser.phone = myUser.phone;
      finalUser.email = myUser.email;
      finalUser.fullName = myUser.fullName;
    }

    
    try{
      mongooseUsersModel.findOneAndUpdate({ $or:[  {'email':myUser.email}, {'phone':myUser.phone}]}, finalUser, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
        if (error) return;
      });
    }
    catch (error) {
      console.log(error.message);
    }  

    

    return await myUser;
  }

  async find(): Promise<User[]> {
    return await mongooseUsersModel.find().exec();
  }

}
