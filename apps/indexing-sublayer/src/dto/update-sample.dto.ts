import { PickType } from "@nestjs/swagger";
import { Sample } from "../schema/sample.schema";

export class UpdateSampleDto extends PickType(Sample, []) {}
