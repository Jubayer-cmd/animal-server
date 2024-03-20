import { ObjectId } from 'mongoose';
export interface IAnimal {
  title: string;
  image: string;
  categoryId: ObjectId;
}
