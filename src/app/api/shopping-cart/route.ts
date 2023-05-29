import ShoppingCart from "@/database/models/ShoppingCart";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await ShoppingCart.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const product = await req.json();
  ShoppingCart.create({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    images: product.images,
  });
  return NextResponse.json({ message: "success" });
}
