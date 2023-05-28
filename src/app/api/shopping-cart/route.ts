import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Item 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Item 2",
      price: 200,
      quantity: 2,
    },
    {
      id: 3,
      name: "Item 3",
      price: 300,
      quantity: 3,
    },
  ]);
}

export async function POST(req: Request) {
  const { productId } = await req.json();
  return NextResponse.json({
    productId,
    name: "Shopping Cart",
    items: [
      {
        id: 1,
        name: "Item 1",
        price: 100,
        quantity: 1,
      },
      {
        id: 2,
        name: "Item 2",
        price: 200,
        quantity: 2,
      },
      {
        id: 3,
        name: "Item 3",
        price: 300,
        quantity: 3,
      },
    ],
  });
}
