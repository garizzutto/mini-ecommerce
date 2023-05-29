import Products from "@/database/models/Products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const { index, limit } = request.query;
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));
  const products = await Products.find()
    .skip(page * limit)
    .limit(limit);
  return NextResponse.json(products);
}

export async function POST(req: Request, res: Response) {
  const product = await req.json();
  Products.create({
    name: product.name,
    description: product.description,
    images: product.images,
    price: product.price,
    quantity: product.quantity,
  });
  return NextResponse.json({ message: "success" });
}
