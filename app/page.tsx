import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import ProductShowcase from "@/components/product-showcase"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop"
            alt="Modern bedroom furniture"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kvalitetan nameštaj za vaš dom</h1>
            <p className="text-xl mb-8">Specijalizovani smo za izradu svih vrsta kreveta i nameštaja po meri</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Pogledajte proizvode
              </Button>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Kontaktirajte nas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1470&auto=format&fit=crop"
                alt="GOD nameštaj radionica"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">O nama</h2>
              <p className="text-lg text-gray-600 mb-6">
                GOD nameštaj je porodična firma koja se već godinama bavi izradom visokokvalitetnog nameštaja, sa
                posebnim fokusom na sve vrste kreveta, garnitura i troseda.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Naš cilj je da kreiramo komade koji su ne samo estetski privlačni, već i izdržljivi i funkcionalni,
                prilagođeni potrebama naših klijenata.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Saznajte više <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Naši proizvodi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bračni kreveti",
                image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1470&auto=format&fit=crop",
              },
              {
                name: "Trosedi",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop",
              },
              {
                name: "Garniture",
                image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
              },
              {
                name: "Dečiji kreveti",
                image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1470&auto=format&fit=crop",
              },
              {
                name: "Kreveti po meri",
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop",
              },
              {
                name: "Dodatna oprema",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop",
              },
            ].map((category, index) => (
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
                  <Link
                    href={`/proizvodi/${category.name.toLowerCase().replace(/ /g, "-")}`}
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
      <ProductShowcase />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Zašto izabrati nas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Kvalitetni materijali",
                description: "Koristimo samo prvoklasne materijale za izradu našeg nameštaja",
              },
              {
                title: "Izrada po meri",
                description: "Prilagođavamo svaki komad vašim specifičnim potrebama i prostoru",
              },
              { title: "Dugogodišnje iskustvo", description: "Godinama usavršavamo naše veštine i tehnike izrade" },
              { title: "Garancija kvaliteta", description: "Nudimo garanciju na sve naše proizvode" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Kontaktirajte nas</h2>
              <p className="text-lg text-gray-600 mb-8">
                Imate pitanje ili želite da naručite nameštaj? Popunite formular ili nas kontaktirajte direktno.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefon</h3>
                    <p className="text-gray-600">+381 66 1111</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">blabla@godnamestaj.rs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Adresa</h3>
                    <p className="text-gray-600">Kovaceva 24, Beograd</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
