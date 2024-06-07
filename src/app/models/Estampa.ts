import mongoose, { Document, Schema, Types } from 'mongoose';
import { IEstampaCategory } from './EstampaCategory';

export interface IEstampa extends Document {
  title: string;
  sku: string;
  image: string;
  description?: string;
  category: IEstampaCategory;
}

const EstampaSchema: Schema = new Schema({
  title:{ type: String, required: true },
  sku: { type: String, required: true },
  image: { type: String, required: true },
  description:{ type: String, required: false },
  category: { type: String, required: true },
});

const Estampa = mongoose.models.Estampa || mongoose.model<IEstampa>('Estampa', EstampaSchema);

export default Estampa;
