import { CreateSectionDto } from "@application/dto/create-section.dto";
import { Section } from "@domain/entities/section";
import { SectionRepository } from "@infrastructure/repository/section.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SectionService {
       constructor(private readonly sectionRepository: SectionRepository){
    }

    async createSection(createSectionDto: CreateSectionDto): Promise<Section>{
        return await this.sectionRepository.createSection(createSectionDto);
    }
}