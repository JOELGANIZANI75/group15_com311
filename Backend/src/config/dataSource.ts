import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../users/Student.entity';
import { Bonding } from '../bonding/bonding-entity';
import { Eligible } from '../erigible/erigibility-entity';
import { University } from '../university/University.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST || 'db.fenqtctwywobpnvdmpqp.supabase.co',
  port: parseInt(process.env.PORT || '5432', 10),
  username: process.env.USER || 'defaultUser',
  password: process.env.DB_PASSWORD || 'defaultPassword',
  database: process.env.DB_NAME || 'defaultDB',
  entities: [User, Bonding, Eligible, University],

  synchronize: true,
  logging: true,
  connectTimeoutMS: 30000,
});
