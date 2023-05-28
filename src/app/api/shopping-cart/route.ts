import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is product 1",
      quantity: 10,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is product 2",
      quantity: 20,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "This is product 3",
      quantity: 30,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
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
