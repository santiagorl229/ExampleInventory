import { Controller, Post, Body, Req, Get, Put, ParseUUIDPipe, Param, Patch} from '@nestjs/common';
import { CreateSectionDto } from '@application/dto/create-section.dto';
import { Section } from '@domain/entities/section';
import { SectionModel } from '@infrastructure/models/section.model';
import { WareHouseService } from '@domain/services/warehouse.service';

// UserController
@Controller('section')
export class SectionController {
  constructor(private readonly warehouseServices: WareHouseService) {}
  
/*   @Patch('/create/:id')
  CreateSection(@Param('id', ParseUUIDPipe) id: string, @Body() createSectionDto: CreateSectionDto): Promise<Section>{
    return this.warehouseServices.createSection(id,createSectionDto);
  }

  @Get('/GetSections')
  async getSections(): Promise<Section[]> {
    return this.warehouseServices.getSections();
  } */
  
/*   @Put('/changeProductForSection')
  async ChangeProductForSection(@Body() json:any): Promise<Section>{
    return this.warehouseServices.ChangeProductForSection(json);
  } */


}

function Putch(arg0: string) {
  throw new Error('Function not implemented.');
}
