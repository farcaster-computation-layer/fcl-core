import { Module } from "@nestjs/common";
import { IndexingSublayerController } from "./controller/indexing-sublayer.controller";
import { IndexingSublayerService } from "./service/indexing-sublayer.service";
import { SampleRepository } from "./repository/sample.repository";

@Module({
  imports: [],
  controllers: [IndexingSublayerController],
  providers: [IndexingSublayerService, SampleRepository],
})
export class IndexingSublayerModule {}
