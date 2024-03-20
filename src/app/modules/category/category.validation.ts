import { z } from 'zod';

export const createCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string(),
  }),
});

export const CategoryValidations = {
  createCategoryValidationSchema,
};
