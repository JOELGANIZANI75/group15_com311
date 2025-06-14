import {
  TypeOrmModuleOptions,
  TypeOrmModuleAsyncOptions,
} from '@nestjs/typeorm';
import { User } from '../users/Student.entity';
import { Bonding } from '../bonding/bonding-entity';
import { Eligible } from '../erigible/erigibility-entity';
import { University } from '../university/University.entity';

// Async TypeORM configuration using environment variables
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    const dbPort = parseInt(process.env.PORT || '5432', 10);
    const dbHost = process.env.DB_HOST || 'db.fenqtctwywobpnvdmpqp.supabase.co';
    const dbUsername = process.env.USER || 'defaultUser';
    const dbPassword = process.env.DB_PASSWORD || 'defaultPassword';
    const dbName = process.env.DB_NAME || 'defaultDB';

    return {
      type: 'postgres',
      host: dbHost,
      port: dbPort,
      username: dbUsername,
      password: dbPassword,
      database: dbName,
      entities: [User, Bonding, Eligible, University],
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: true, // Be cautious with this in production; use migrations instead
      logging: false,
      connectTimeoutMS: 30000,
    };
  },
};

// Static TypeORM configuration
