import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { SampleService } from "../service/sample.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Sample V1")
@Controller(`v1/sample`)
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}
}
