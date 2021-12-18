import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // show error message about dto
      // disableErrorMessages: true,
      whitelist: true, // remove params that not include in dto
      transform: true, // transform params type to expect type
    }),
  );

  // global middleware
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
