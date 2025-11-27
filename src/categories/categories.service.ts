import { Injectable } from '@nestjs/common';
import { Categories } from '../data/categories';

@Injectable()
export class CategoriesService {
  findAll() {
    return Categories;
  }

  findById(id: string) {
    return Categories.find((c) => c.id === id);
  }
}
