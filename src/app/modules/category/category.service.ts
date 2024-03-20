import { ICategory } from './category.interface';
import { Category } from './category.model';

const createCategory = async (category: ICategory) => {
  return await Category.create(category);
};

export const CategoryService = {
  createCategory,
};
