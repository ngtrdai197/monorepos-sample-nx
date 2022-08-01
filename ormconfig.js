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
  entities: ['./**/*.entity{.ts,.js}'],
  migrations: ['./migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: './migrations',
  },
  logging: true,
};
