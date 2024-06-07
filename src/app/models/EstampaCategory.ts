import mongoose, { Document, Schema, Types } from 'mongoose';
export interface IEstampaCategory extends Document {
  slug: string;
  name: string;
}

const EstampaCategorySchema: Schema = new Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true }
});

const EstampaCategory =
  mongoose.models.EstampaCategory ||
  mongoose.model<IEstampaCategory>('EstampaCategory', EstampaCategorySchema);

export default EstampaCategory;
