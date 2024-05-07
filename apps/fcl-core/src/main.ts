import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestApplication, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { loadMvSublayer } from "apps/mv-sublayer/src/loader";
import { loadFilteringSublayer } from "apps/filtering-sublayer/src/loader";
import { loadIndexingSublayer } from "apps/indexing-sublayer/src/loader";

async function bootstrapNest() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.setGlobalPrefix("api", { exclude: ["/healthcheck"] });

  app.useGlobalPipes(new ValidationPipe());

  loadMvSublayer(app);
  loadIndexingSublayer(app);
  loadFilteringSublayer(app);

  app.startAllMicroservices();

  await setUpSwagger(app);
  await app.listen(process.env.PORT || 8080, "0.0.0.0");
}

async function setUpSwagger(app: NestApplication) {
  const config = new DocumentBuilder()
    .setTitle("FCL: boilerplate")
    .setDescription("API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
}

bootstrapNest();
