import { Injectable, Inject } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { UserRepository } from '@infrastructure/repository/user.repository';
import { SmsRepository } from '@infrastructure/repository/sms.repository';
import { EmailRepository } from '@infrastructure/repository/email.repository';

// Se inyecta el repo en el servicio
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }

  async createSms(createUserDto: CreateUserDto): Promise<User> {
    let userEmail = createUserDto.email;
    let userPhone = createUserDto.phone;
    let userName = createUserDto.fullName;
    let userMessage = createUserDto.schedule[0].message;
    await SmsRepository.prototype.sendSMS( userPhone, userName, userEmail, userMessage);
    return await this.userRepository.create(createUserDto);
  }
  async createProgramingCalls(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }


  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async contactUS(createUserDto: CreateUserDto){
    let userEmail = createUserDto.email;
    let userPhone = createUserDto.phone;
    let userName = createUserDto.fullName;
    let userMessage = createUserDto.schedule[0].message;
    let userSoonAsPossible = createUserDto.schedule[0].asSoonAsPossible;
    console.log("esta monda no imprime aca", createUserDto.schedule[0].asSoonAsPossible)
    let userTime = createUserDto.schedule[0].schedule + ' ' + createUserDto.schedule[0].hour;
    return await EmailRepository.prototype.contactUS(userEmail, userPhone, userName, userMessage, userTime, userSoonAsPossible);
  }

  async sendEmail(createUserDto: CreateUserDto){
    let userEmail = createUserDto.email;
    let userPhone = createUserDto.phone;
    let userName = createUserDto.fullName;
    let userMessage = createUserDto.schedule[0].message;
    return await EmailRepository.prototype.sendEmail(userEmail, userPhone, userName, userMessage);
  }
}
