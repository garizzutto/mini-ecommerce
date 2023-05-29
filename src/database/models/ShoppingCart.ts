import mongoose from "../database";

const Schema = mongoose.Schema;
const ShoppingCartSchema = new Schema<Product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const ShoppingCart =
  mongoose.models.ShoppingCart ||
  mongoose.model<Product>("ShoppingCart", ShoppingCartSchema);
export default ShoppingCart;
