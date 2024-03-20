import { z } from 'zod';

export const createAnimalValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    image: z.string(),
    categoryId: z.string().nonempty(),
  }),
});

export const AnimalValidations = {
  createAnimalValidationSchema,
};
