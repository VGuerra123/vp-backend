import { Injectable } from '@nestjs/common';
import { products } from '../data/products';
import { Categories } from '../data/categories';

@Injectable()
export class ProductsService {

  findAll() {
    return products.map(p => ({
      ...p,
      category: Categories.find(c => c.id === p.category_id)
    }));
  }

  findByBarcode(barcode: string) {
    const product = products.find(p => p.barcode === barcode);
    if (!product) return null;

    return {
      ...product,
      category: Categories.find(c => c.id === product.category_id)
    };
  }
}
