import { IAnimal } from './animal.interface';
import { Animal } from './animal.model';

const createAnimal = async (animal: IAnimal) => {
  return await Animal.create(animal);
};

const getAnimals = async () => {
  return await Animal.find();
};

export const AnimalService = {
  createAnimal,
  getAnimals,
};
