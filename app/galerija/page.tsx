"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1470&auto=format&fit=crop",
    alt: "Moderna spavaća soba sa bračnim krevetom",
    category: "Bračni kreveti",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop",
    alt: "Elegantni trosed u dnevnoj sobi",
    category: "Trosedi",
  },
  {
    src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
    alt: "Garnitura za dnevnu sobu",
    category: "Garniture",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop",
    alt: "Dečiji krevet sa prostorom za igru",
    category: "Dečiji kreveti",
  },
  {
    src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1470&auto=format&fit=crop",
    alt: "Krevet po meri sa ugrađenim ormarima",
    category: "Kreveti po meri",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop",
    alt: "Moderna spavaća soba sa bračnim krevetom",
    category: "Bračni kreveti",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop",
    alt: "Udoban trosed u dnevnoj sobi",
    category: "Trosedi",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
    alt: "Garnitura za dnevnu sobu",
    category: "Garniture",
  },
  {
    src: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1470&auto=format&fit=crop",
    alt: "Dečiji krevet sa temom svemira",
    category: "Dečiji kreveti",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop",
    alt: "Krevet po meri za malu spavaću sobu",
    category: "Kreveti po meri",
  },
  {
    src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1470&auto=format&fit=crop",
    alt: "Moderna spavaća soba sa bračnim krevetom",
    category: "Bračni kreveti",
  },
  {
    src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
    alt: "Trosed sa funkcijom razvlačenja",
    category: "Trosedi",
  },
]

const categories = ["Sve", "Bračni kreveti", "Trosedi", "Garniture", "Dečiji kreveti", "Kreveti po meri"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Sve")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    activeCategory === "Sve" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop"
            alt="Galerija nameštaja"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerija</h1>
          <p className="text-xl max-w-2xl">Pogledajte naše radove i inspirišite se za uređenje vašeg doma</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                    <p className="font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image src={selectedImage || "/placeholder.svg"} alt="Uvećana slika" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}
