import { PickType } from "@nestjs/swagger";
import { Sample } from "../schema/sample.schema";

export class CreateSampleDto extends PickType(Sample, ["name"]) {}
