import { Controller, Post, Body, Req, Get} from '@nestjs/common';
import { SectionService } from 'src/domain/services/section.service';
import { CreateSectionDto } from '@application/dto/create-section.dto';
import { Section } from '@domain/entities/section';

// UserController
@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}
  @Post('/createSection')
  CreateSection(@Body() createSectionDto: CreateSectionDto): Promise<Section>{
    return this.sectionService.createSection(createSectionDto);
  }
}