import { NestApplication } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const loadMvSublayer = (app: NestApplication) => {
  return app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 5000,
    },
  });
};
