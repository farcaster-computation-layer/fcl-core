import { Injectable } from "@nestjs/common";
import { Sample, SampleDocument } from "../schema/sample.schema";
import { CreateSampleDto } from "../dto/create-sample.dto";
import { UpdateSampleDto } from "../dto/update-sample.dto";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class SampleRepository {
  constructor(
    @InjectModel("SAMPLE")
    private readonly sampleModel: any
  ) {}

  create(createSampleDto: CreateSampleDto) {
    return this.sampleModel.create(createSampleDto);
  }
}
