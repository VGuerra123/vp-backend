import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly service: ProductsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':barcode')
  getByBarcode(@Param('barcode') barcode: string) {
    return this.service.findByBarcode(barcode);
  }
}
