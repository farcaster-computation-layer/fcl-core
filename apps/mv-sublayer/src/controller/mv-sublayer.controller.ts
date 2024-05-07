import { Controller, Get } from "@nestjs/common";
import { MvSublayerService } from "../service/mv-sublayer.service";
import { MvSublayerBaseController } from "./mv-sublayer.base.controller";

@Controller()
export class MvSublayerController extends MvSublayerBaseController {
  constructor(private readonly mvSublayerService: MvSublayerService) {
    super();
  }

  @Get()
  getHello(): string {
    return this.mvSublayerService.getHello();
  }

  receiveData(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
