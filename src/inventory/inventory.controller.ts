import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Post('add')
  add(@Body() body: { barcode: string; quantity: number; expiration_date: string; location?: string }) {
    return this.service.add(body);
  }

  @Post('decrease')
  decrease(@Body() body: { id: string; qty: number }) {
    return this.service.decreaseQuantity(body.id, body.qty);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.remove(id);
  }

  @Post('replace')
  replaceAll(@Body() body: any[]) {
    return this.service.replaceAll(body);
  }
}
