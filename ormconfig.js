import * as path from 'path';
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  type: 'mysql',
  host: process.env['DB_HOST'] || 'localhost',
  port: +process.env['DB_PORT'] || 3306,
  username: process.env['DB_USERNAME'] || 'root',
  password: process.env['DB_PASSOWRD'] || '12345678xxx',
  database: process.env['DB_NAME'] || 'sample_nx',
  synchronize: false,
  entities: [path.join(__dirname, './**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, './migrations/./*{.ts,.js}')],
  cli: {
    migrationsDir: path.join(__dirname, './migrations'),
  },
  logging: true,
  migrationsRun: true,
  migrationsTableName: 'migrations',
};
