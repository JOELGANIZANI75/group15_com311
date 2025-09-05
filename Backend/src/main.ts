import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS only for your frontend domain
  app.enableCors({
    origin: ['https://group15-com311.vercel.app'],
    credentials: true,
  });

  // Increase the size limit for JSON and URL-encoded bodies
  app.use(bodyParser.json({ limit: '10mb' })); 
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  await app.listen(process.env.PORT || 3001);
}
bootstrap();

