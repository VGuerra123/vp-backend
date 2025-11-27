import { Injectable } from '@nestjs/common';
import { mockDB, defaultCategories, mockProducts } from '../data/mockDB';

@Injectable()
export class InventoryService {

  getAll() {
    return mockDB.getAll();
  }

  getById(id: string) {
    return mockDB.getById(id);
  }

  add(item: {
    barcode: string;
    quantity: number;
    expiration_date: string;
    location?: string;
  }) {
    // 1) Buscar el producto
    const product = mockProducts.find((p) => p.barcode === item.barcode);
    if (!product) {
      throw new Error(`Producto con barcode ${item.barcode} no existe`);
    }

    // 2) Obtener la categoría correspondiente
    const category = defaultCategories.find(
      (c) => c.id === product.category_id
    );
    if (!category) {
      throw new Error(
        `La categoría asociada (${product.category_id}) no existe`
      );
    }

    // 3) Registrar el item en la DB
    return mockDB.add({
      quantity: item.quantity,
      expiration_date: item.expiration_date,
      location: item.location ?? 'Bodega',
      product,
      category,
    });
  }

  decreaseQuantity(id: string, qty: number) {
    return mockDB.decreaseQuantity(id, qty);
  }

  remove(id: string) {
    return mockDB.remove(id);
  }

  replaceAll(body: any[]) {
    return mockDB.replaceAll(body);
  }
}
