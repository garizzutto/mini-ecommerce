import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const { index, limit } = request.query;
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));
  console.log("page", page);
  console.log("limit", limit);
  let products = [];
  for (let i = 1 + page * limit; i <= limit + page * limit; i++) {
    products.push({
      id: i,
      name: "Product " + i,
      price: 100 * i,
      description: "This is product " + i,
      quantity: 10 * i,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    });
  }

  return NextResponse.json(products);
}
