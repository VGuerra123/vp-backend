import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://vencepronto.cloud', // frontend oficial
      'http://localhost:5173',     // por si desarrollas local
    ],
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
