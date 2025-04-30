// Ovo je jednostavan servis za upravljanje proizvodima
// U produkciji, ovo bi se povezalo sa CMS-om ili bazom podataka

import fs from "fs/promises"
import path from "path"

// Definišemo tipove za proizvode
export interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  details?: string
  specifications?: Record<string, string>
  gallery?: string[]
}

// Putanja do JSON fajla sa proizvodima
const productsFilePath = path.join(process.cwd(), "data", "products.json")

// Funkcija za dobijanje svih proizvoda
export async function getAllProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(productsFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Greška pri čitanju proizvoda:", error)
    return []
  }
}

// Funkcija za dobijanje proizvoda po ID-u
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const products = await getAllProducts()
    return products.find((product) => product.id === id) || null
  } catch (error) {
    console.error("Greška pri traženju proizvoda:", error)
    return null
  }
}

// Funkcija za dobijanje proizvoda po kategoriji
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const products = await getAllProducts()
    return products.filter((product) => product.category === category)
  } catch (error) {
    console.error("Greška pri filtriranju proizvoda:", error)
    return []
  }
}

// Funkcija za dobijanje svih kategorija
export async function getAllCategories(): Promise<string[]> {
  try {
    const products = await getAllProducts()
    const categories = new Set(products.map((product) => product.category))
    return Array.from(categories)
  } catch (error) {
    console.error("Greška pri dobijanju kategorija:", error)
    return []
  }
}

// Funkcija za dodavanje novog proizvoda (za admin panel)
export async function addProduct(product: Omit<Product, "id">): Promise<Product> {
  try {
    const products = await getAllProducts()
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1

    const newProduct = {
      id: newId,
      ...product,
    }

    await fs.writeFile(productsFilePath, JSON.stringify([...products, newProduct], null, 2))

    return newProduct
  } catch (error) {
    console.error("Greška pri dodavanju proizvoda:", error)
    throw new Error("Nije moguće dodati proizvod")
  }
}

// Funkcija za ažuriranje proizvoda (za admin panel)
export async function updateProduct(id: number, productData: Partial<Product>): Promise<Product | null> {
  try {
    const products = await getAllProducts()
    const index = products.findIndex((p) => p.id === id)

    if (index === -1) return null

    const updatedProduct = {
      ...products[index],
      ...productData,
    }

    products[index] = updatedProduct

    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2))

    return updatedProduct
  } catch (error) {
    console.error("Greška pri ažuriranju proizvoda:", error)
    throw new Error("Nije moguće ažurirati proizvod")
  }
}

// Funkcija za brisanje proizvoda (za admin panel)
export async function deleteProduct(id: number): Promise<boolean> {
  try {
    const products = await getAllProducts()
    const filteredProducts = products.filter((p) => p.id !== id)

    if (filteredProducts.length === products.length) {
      return false // Proizvod nije pronađen
    }

    await fs.writeFile(productsFilePath, JSON.stringify(filteredProducts, null, 2))

    return true
  } catch (error) {
    console.error("Greška pri brisanju proizvoda:", error)
    throw new Error("Nije moguće obrisati proizvod")
  }
}
