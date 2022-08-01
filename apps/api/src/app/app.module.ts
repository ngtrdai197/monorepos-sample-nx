import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { environment } from '../environments/environment';
import { ApiProductModule, ProductEntity } from '@monorepos/api/product';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.mysql.host,
      port: environment.mysql.port,
      username: environment.mysql.username,
      password: environment.mysql.password,
      database: environment.mysql.database,
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + './migrations/*{.ts,.js}'],
      logging: !environment.production ? true : false,
    }),
    ApiProductModule,
  ],
})
export class AppModule {}
