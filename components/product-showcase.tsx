"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Bračni krevet Elegance",
    description: "Moderan bračni krevet sa tapaciranim uzglavljem i prostorom za odlaganje.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop",
    category: "Bračni kreveti",
  },
  {
    id: 2,
    name: "Trosed Comfort",
    description: "Udoban trosed sa mogućnošću razvlačenja u ležaj za spavanje.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop",
    category: "Trosedi",
  },
  {
    id: 3,
    name: "Garnitura Lux",
    description: "Kompletna garnitura koja uključuje trosed, dvosed i fotelju.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
    category: "Garniture",
  },
  {
    id: 4,
    name: "Dečiji krevet Fantasy",
    description: "Kreativni dečiji krevet sa dodatnim prostorom za igračke.",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1470&auto=format&fit=crop",
    category: "Dečiji kreveti",
  },
  {
    id: 5,
    name: "Krevet po meri Unique",
    description: "Krevet izrađen po vašim dimenzijama i željama.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop",
    category: "Kreveti po meri",
  },
  {
    id: 6,
    name: "Bračni krevet Modern",
    description: "Minimalistički dizajn sa kvalitetnim drvenim okvirom.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1470&auto=format&fit=crop",
    category: "Bračni kreveti",
  },
]

const categories = ["Svi proizvodi", "Bračni kreveti", "Trosedi", "Garniture", "Dečiji kreveti", "Kreveti po meri"]

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("Svi proizvodi")

  const filteredProducts =
    activeCategory === "Svi proizvodi" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Izdvojeni proizvodi</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Pogledajte našu selekciju najpopularnijih proizvoda koje izrađujemo sa pažnjom i kvalitetom
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-end">
                  <Link
                    href={`/proizvodi/${product.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                  >
                    Detaljnije <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button className="bg-orange-600 hover:bg-orange-700">Pogledajte sve proizvode</Button>
        </div>
      </div>
    </section>
  )
}
