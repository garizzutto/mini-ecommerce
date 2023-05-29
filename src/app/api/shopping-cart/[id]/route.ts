import ShoppingCart from "@/database/models/ShoppingCart";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log(id);
  await ShoppingCart.deleteOne({
    id,
  }).exec();
  return NextResponse.json({ message: "success" });
}
