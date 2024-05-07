import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { SampleModule } from "./modules/sample/sample.module";
import { MvSublayerModule } from "apps/mv-sublayer/src/mv-sublayer.module";
import { IndexingSublayerModule } from "apps/indexing-sublayer/src/indexing-sublayer.module";

@Module({
  imports: [SampleModule, MvSublayerModule, IndexingSublayerModule],
  controllers: [AppController],
})
export class AppModule {}
