import { NextResponse } from "next/server"
import { getProductById, updateProduct, deleteProduct } from "@/lib/products-service"

// GET /api/products/[id] - Dobijanje proizvoda po ID-u
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Nevažeći ID" }, { status: 400 })
    }

    const product = await getProductById(id)
    if (!product) {
      return NextResponse.json({ error: "Proizvod nije pronađen" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Greška pri dobijanju proizvoda:", error)
    return NextResponse.json({ error: "Greška pri dobijanju proizvoda" }, { status: 500 })
  }
}

// PUT /api/products/[id] - Ažuriranje proizvoda
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Nevažeći ID" }, { status: 400 })
    }

    const productData = await request.json()

    // Validacija podataka
    if (!productData.name || !productData.category || !productData.image) {
      return NextResponse.json({ error: "Nedostaju obavezna polja" }, { status: 400 })
    }

    const updatedProduct = await updateProduct(id, productData)
    if (!updatedProduct) {
      return NextResponse.json({ error: "Proizvod nije pronađen" }, { status: 404 })
    }

    return NextResponse.json(updatedProduct)
  } catch (error) {
    console.error("Greška pri ažuriranju proizvoda:", error)
    return NextResponse.json({ error: "Greška pri ažuriranju proizvoda" }, { status: 500 })
  }
}

// DELETE /api/products/[id] - Brisanje proizvoda
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Nevažeći ID" }, { status: 400 })
    }

    const success = await deleteProduct(id)
    if (!success) {
      return NextResponse.json({ error: "Proizvod nije pronađen" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Greška pri brisanju proizvoda:", error)
    return NextResponse.json({ error: "Greška pri brisanju proizvoda" }, { status: 500 })
  }
}
