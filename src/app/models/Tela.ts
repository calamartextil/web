import mongoose, { Document, Schema } from 'mongoose';
export interface ITela extends Document {
  title: string;
  sku: string;
  description?: string;
  baseColor?: string;
  composition?: string;
  width?: number;
  usos?: string[];
  prices: number[];
  images: {
    lisaUrl: string;
    estampadaUrl?: string;
    usosUrl?: string;
  };
  // categories: telasCategory[];
}

const telaSchema: Schema = new Schema({
  title: { type: String, required: true },
  sku: { type: String, required: true },
  description: { type: String, required: true },
  baseColor: { type: String, required: true },
  composition: { type: String, required: true },
  width: { type: String, required: true },
  usos: { type: Array, required: true },
  prices: { type: Array, required: true },
  images: { type: Object, required: true },
});

const Tela = mongoose.models.Tela || mongoose.model<ITela>('Tela', telaSchema);

export default Tela;
