import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Server Status")
@Controller()
export class AppController {
  constructor() {}

  @Get("/healthcheck")
  getHello(): string {
    return `The server is healthy`;
  }
}
