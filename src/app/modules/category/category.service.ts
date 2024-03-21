import { ICategory } from './category.interface';
import { Category } from './category.model';

const createCategory = async (category: ICategory) => {
  return await Category.create(category);
};

const getCategories = async () => {
  return await Category.find();
};

export const CategoryService = {
  createCategory,
  getCategories,
};
