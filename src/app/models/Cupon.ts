import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICupon extends Document {
  title: string;
  discount: number;
}

const cuponSchema: Schema = new Schema({
  title: { type: String, required: true },
  discount: { type: Number, required: true },
});

const Cupon =
  mongoose.models.Cupon ||
  mongoose.model<ICupon>('Cupon', cuponSchema, 'cupones');

export default Cupon;
