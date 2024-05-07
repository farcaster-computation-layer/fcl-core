import { NestApplication } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const loadFilteringSublayer = (app: NestApplication) => {
  return app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 5002,
    },
  });
};
