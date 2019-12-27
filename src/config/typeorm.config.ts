/* eslint-disable prefer-template */
import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'taskmanagement',
  entities: [path.join(__dirname, '../**/*.entity.{ts,js}')],
  synchronize: true,
};
