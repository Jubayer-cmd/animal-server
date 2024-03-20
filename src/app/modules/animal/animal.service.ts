import { IAnimal } from './animal.interface';
import { Animal } from './animal.model';

const createAnimal = async (animal: IAnimal) => {
  return await Animal.create(animal);
};

export const AnimalService = {
  createAnimal,
};
