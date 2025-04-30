import { NextResponse } from "next/server"
import { getAllProducts, addProduct } from "@/lib/products-service"

// GET /api/products - Dobijanje svih proizvoda
export async function GET() {
  try {
    const products = await getAllProducts()
    return NextResponse.json(products)
  } catch (error) {
    console.error("Greška pri dobijanju proizvoda:", error)
    return NextResponse.json({ error: "Greška pri dobijanju proizvoda" }, { status: 500 })
  }
}

// POST /api/products - Dodavanje novog proizvoda
export async function POST(request: Request) {
  try {
    const productData = await request.json()

    // Validacija podataka
    if (!productData.name || !productData.category || !productData.image) {
      return NextResponse.json({ error: "Nedostaju obavezna polja" }, { status: 400 })
    }

    const newProduct = await addProduct(productData)
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Greška pri dodavanju proizvoda:", error)
    return NextResponse.json({ error: "Greška pri dodavanju proizvoda" }, { status: 500 })
  }
}
