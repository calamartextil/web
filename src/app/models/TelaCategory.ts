import mongoose, { Document, Schema, Types } from 'mongoose';
export interface ITelaCategory extends Document {
  slug: string;
  name: string;
}

const TelaCategorySchema: Schema = new Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true }
});

const TelaCategory =
  mongoose.models.TelaCategory ||
  mongoose.model<ITelaCategory>('TelaCategory', TelaCategorySchema);

export default TelaCategory;
