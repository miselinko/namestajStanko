import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const productCategories = [
  {
    name: "Bračni kreveti",
    description: "Udobni i elegantni bračni kreveti za kvalitetan san",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop",
    link: "/proizvodi/bracni-kreveti",
  },
  {
    name: "Trosedi",
    description: "Funkcionalni trosedi sa mogućnošću razvlačenja",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop",
    link: "/proizvodi/trosedi",
  },
  {
    name: "Garniture",
    description: "Kompletne garniture za dnevnu sobu",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
    link: "/proizvodi/garniture",
  },
  {
    name: "Dečiji kreveti",
    description: "Kreativni i sigurni kreveti za najmlađe",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1470&auto=format&fit=crop",
    link: "/proizvodi/deciji-kreveti",
  },
  {
    name: "Kreveti po meri",
    description: "Jedinstveni kreveti prilagođeni vašem prostoru",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop",
    link: "/proizvodi/kreveti-po-meri",
  },
]

const featuredProducts = [
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

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop"
            alt="Naši proizvodi"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Naši proizvodi</h1>
          <p className="text-xl max-w-2xl">Istražite našu široku ponudu kvalitetnog nameštaja za vaš dom</p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Kategorije proizvoda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-white hover:text-orange-300 transition-colors"
                  >
                    Pogledajte sve <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Izdvojeni proizvodi</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Pogledajte našu selekciju najpopularnijih proizvoda koje izrađujemo sa pažnjom i kvalitetom
          </p>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* Custom Furniture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1470&auto=format&fit=crop"
                alt="Nameštaj po meri"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nameštaj po meri</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ne možete da pronađete savršen komad nameštaja za vaš dom? Nudimo uslugu izrade nameštaja po meri prema
                vašim specifičnim potrebama i željama.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Naš tim iskusnih dizajnera i majstora će vam pomoći da kreirate jedinstvene komade koji će se savršeno
                uklopiti u vaš prostor i stil.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Saznajte više <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Spremni da opremite svoj dom?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas i dogovorite besplatnu konsultaciju sa našim dizajnerima.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100">Kontaktirajte nas</Button>
        </div>
      </section>
    </div>
  )
}
