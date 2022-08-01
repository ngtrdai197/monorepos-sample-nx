import { Controller, Get } from '@nestjs/common';
import { ApiProductService } from './api-product.service';

@Controller('product')
export class ApiProductController {
  constructor(private readonly apiProductService: ApiProductService) {}

  @Get('')
  public getService() {
    return this.apiProductService.getServiceName();
  }
}
