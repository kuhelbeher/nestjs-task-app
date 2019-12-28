/* eslint-disable prefer-template */
import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const {
  type,
  port,
  database,
  host,
  username,
  password,
  synchronize,
} = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type,
  host: process.env.RDS_HOSTNAME || host,
  port: process.env.RDS_PORT || port,
  username: process.env.RDS_USERNAME || username,
  password: process.env.RDS_PASSWORD || password,
  database: process.env.RDS_DB_NAME || database,
  entities: [path.join(__dirname, '../**/*.entity.{ts,js}')],
  synchronize,
};
