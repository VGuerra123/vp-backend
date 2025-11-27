import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    InventoryModule,
  ],
})
export class AppModule {}
