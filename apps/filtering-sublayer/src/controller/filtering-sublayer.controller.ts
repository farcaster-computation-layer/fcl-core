import { Controller, Get } from "@nestjs/common";
import { FilteringSublayerService } from "../service/filtering-sublayer.service";
import { FilteringSublayerBaseController } from "./filtering-sublayer.base.controller";

@Controller()
export class FilteringSublayerController extends FilteringSublayerBaseController {
  constructor(
    private readonly filteringSublayerService: FilteringSublayerService
  ) {
    super();
  }

  @Get()
  getHello(): string {
    return this.filteringSublayerService.getHello();
  }
}
