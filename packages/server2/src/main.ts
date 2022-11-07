import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
if (import.meta.env.PROD) {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  }
  bootstrap();
}

export const viteNodeApp = NestFactory.create(AppModule);
