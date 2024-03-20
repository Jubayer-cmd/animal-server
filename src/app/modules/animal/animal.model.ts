import mongoose, { Schema } from 'mongoose';
import { IAnimal } from './animal.interface';

const AnimalSchema: Schema<IAnimal> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export const Animal = mongoose.model<IAnimal>('Animal', AnimalSchema);
