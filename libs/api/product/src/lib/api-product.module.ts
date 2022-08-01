import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProductController } from './api-product.controller';
import { ApiProductService } from './api-product.service';
import { ProductEntity } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ApiProductController],
  providers: [ApiProductService],
  exports: [ApiProductService],
})
export class ApiProductModule {}
