import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createCategoryValidationSchema } from './category.validation';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createCategoryValidationSchema),
  CategoryController.createCategory,
);

router.get('/', CategoryController.getCategories);

export const CategoryRoutes = router;
