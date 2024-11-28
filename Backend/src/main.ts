import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Increase the size limit for JSON and URL-encoded bodies
  app.use(bodyParser.json({ limit: '10mb' })); // Adjust the limit as needed
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Adjust the limit as needed

  // Ensure the app listens on the port set by the environment variable (for Vercel)
  const port = process.env.PORT || 3000; // Use Vercel's dynamic port or fallback to 3000
  await app.listen(port);
}
bootstrap();
