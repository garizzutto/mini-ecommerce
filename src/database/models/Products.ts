import mongoose from "../database";

const Schema = mongoose.Schema;
const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Products =
  mongoose.models.Products ||
  mongoose.model<Product>("Products", ProductSchema);
export default Products;
