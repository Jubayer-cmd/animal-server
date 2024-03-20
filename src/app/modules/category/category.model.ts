// models/Issue.ts
import mongoose, { Schema } from 'mongoose';
import { ICategory } from './category.interface';

const CategorySchema: Schema<ICategory> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model<ICategory>('Category', CategorySchema);
