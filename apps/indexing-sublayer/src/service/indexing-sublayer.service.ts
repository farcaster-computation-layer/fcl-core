import { Injectable } from "@nestjs/common";
import { SampleRepository } from "../repository/sample.repository";
import { CreateSampleDto } from "../dto/create-sample.dto";
import { UpdateSampleDto } from "../dto/update-sample.dto";

@Injectable()
export class IndexingSublayerService {
  getHello(): string {
    return "Hello World!";
  }

  constructor(private readonly chainRepository: SampleRepository) {}

  create(createSampleDto: CreateSampleDto) {
    return this.chainRepository.create(createSampleDto);
  }
}
