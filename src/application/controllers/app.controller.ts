import { LoggerService, Context } from '@domain/services/logger.service';
import { Controller, Get, Post, Body, UseInterceptors, Res } from '@nestjs/common';
import { UserService } from '@domain/services/user.service';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { User } from '@domain/entities/User';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

// UserController
@ApiTags('user')
@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  private Log: LoggerService = new LoggerService('createOperation');
  constructor(private readonly userService: UserService) {}

  @Get('/hello')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  get(): string {
    const context: Context = { module: 'AppController', method: 'get' };
    this.Log.logger('Hello World!', context);
    return 'Hello World!';
  }

  @Get('/all')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async getAll(): Promise<User[]> {
    const context: Context = { module: 'AppController', method: 'getAll' };
    this.Log.logger('Hello World!', context);
    return await this.userService.find();
  }

  @Post('/user/register/contactme')
  @ApiResponse({ status: 201, description: '{sucess: true, message: "tu mensaje fue enviado correctamente"}', })
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async create(@Body() user: CreateUserDto){
    const context: Context = { module: 'AppController', method: 'create' };
    let jsonData = {
      sucess: true,
      message: "Tu mensaje fue enviado correctamente."
    }
    await this.userService.contactUS(user);
    await this.userService.sendEmail(user);
    if (await this.userService.create(user)){
      return jsonData;
    }
    else{
      return {
        sucess: false,
        message: "No se envió correctamente el mensaje. Por favor inténtelo de nuevo."
      }
    }
  }

  @Post('/user/register/whatsapp')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async createWhatsapp(@Body() user: CreateUserDto){
    const context: Context = { module: 'AppController', method: 'createWhatsapp' };
    let jsonData = {
      sucess: true,
      message: "Tu mensaje fue enviado correctamente."
    }
    await this.userService.contactUS(user);
    if (await this.userService.create(user)){
      return jsonData;
    }
    else{
      return {
        sucess: false,
        message: "No se envió correctamente el mensaje. Por favor inténtelo de nuevo."
      }
    }
  }
  
  @Post('/user/register/Sms')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async createSms(@Body() user: CreateUserDto, @Res() res){
    const context: Context = { module: 'AppController', method: 'createSms' };
    let jsonData = {
      sucess: true,
      message: "Tu mensaje fue enviado correctamente."
    }
    await this.userService.contactUS(user);
    await this.userService.createSms(user);
    if (await this.userService.create(user)){
      return jsonData;
    }
    else{
      return {
        sucess: false,
        message: "No se envió correctamente el mensaje. Por favor inténtelo de nuevo."
      }
    }
  }

  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post('/user/register/ProgrammingCalls')
  async createProgrammingCalls(@Body() user: CreateUserDto){
    const context: Context = { module: 'AppController', method: 'createProgrammingCalls' };
    let jsonData = {
      sucess: true,
      message: "Tu mensaje fue enviado correctamente."
    }
    await this.userService.contactUS(user);
    await this.userService.createSms(user);
    if (await this.userService.create(user)){
      return jsonData;
    }
    else{
      return {
        sucess: false,
        message: "No se envió correctamente el mensaje. Por favor inténtelo de nuevo."
      }
    }
  }
  
}
