import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createAnimalValidationSchema } from './animal.validation';
import { AnimalController } from './animal.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createAnimalValidationSchema),
  AnimalController.createAnimal,
);

router.get('/', AnimalController.getAnimals);

export const AnimalRoutes = router;
