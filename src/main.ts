import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { APIPrefix } from '@constant/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APIPrefix.Version);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  //await app.startAllMicroservices();
  const port = parseInt(process.env.SERVER_PORT);
  await app.listen(port);
}

bootstrap();
