import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Phone } from "lucide-react"
import { getProductById } from "@/lib/products-service"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetails productId={productId} />
      </Suspense>
    </div>
  )
}

async function ProductDetails({ productId }: { productId: number }) {
  const product = await getProductById(productId)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Proizvod nije pronađen</h1>
        <p className="mb-8">Traženi proizvod ne postoji ili je uklonjen.</p>
        <Link href="/proizvodi">
          <Button>Nazad na sve proizvode</Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              Početna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/proizvodi" className="hover:text-orange-600">
              Proizvodi
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/proizvodi/${product.category.toLowerCase().replace(/ /g, "-")}`}
              className="hover:text-orange-600"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gallery thumbnails if available */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-md overflow-hidden cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - slika ${index + 1}`}
                        fill
                        className="object-cover hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
              <div className="mb-2">
                <Link
                  href={`/proizvodi/${product.category.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-orange-600 font-medium hover:underline"
                >
                  {product.category}
                </Link>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>

              <div className="border-t border-b py-6 mb-6">
                <p className="text-gray-700 mb-4">{product.description}</p>
                {product.details && <p className="text-gray-700">{product.details}</p>}
              </div>

              {/* Specifications if available */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Specifikacije</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="w-1/3 text-gray-600">{key}:</span>
                        <span className="w-2/3 text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact for order */}
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Zainteresovani ste za ovaj proizvod?</h3>
                <p className="text-gray-700 mb-4">Kontaktirajte nas za više informacija ili da napravite porudžbinu.</p>
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-gray-800">+381 66 1111</span>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-orange-600 hover:bg-orange-700">Kontaktirajte nas</Button>
                  <Link href="/kontakt">
                    <Button variant="outline">Pošaljite upit</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to products */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/proizvodi" className="inline-flex items-center text-orange-600 hover:text-orange-700">
          <ChevronLeft className="h-4 w-4 mr-1" /> Nazad na sve proizvode
        </Link>
      </div>
    </>
  )
}

function ProductSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="lg:w-1/2">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse mb-6"></div>
          <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
