import { Controller, Get } from "@nestjs/common";
import { IndexingSublayerService } from "../service/indexing-sublayer.service";
import { MessagePattern } from "@nestjs/microservices";
import { SampleRepository } from "../repository/sample.repository";
import { IndexingSublayerBaseController } from "./indexing-sublayer.base.controller";

@Controller()
export class IndexingSublayerController extends IndexingSublayerBaseController {
  constructor(
    private readonly indexingSublayerService: IndexingSublayerService,
    private readonly sampleRepository: SampleRepository
  ) {
    super();
  }

  @Get()
  getHello(): string {
    return this.indexingSublayerService.getHello();
  }

  fetchUnread(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  indexData(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  keepIndexing(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getIndexed(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
