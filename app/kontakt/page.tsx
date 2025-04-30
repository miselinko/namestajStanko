import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import ContactForm from "@/components/contact-form"

const locations = [
  {
    name: "Salon1",
    address: "Kovaceva 24, Beograd",
    phone: "+381 66 1111",
    email: "blabla@godnamestaj.rs",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9359901953793!2d20.45989631554938!3d44.80236087909862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5ee055d5%3A0xc8b7b7c4fe53db87!2z0JrQvtCy0LDRh9C10LLQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1714501234567!5m2!1ssr!2srs",
  },
  {
    name: "Salon2",
    address: "Bulevar Mihaila Pupina 115a24, Beograd",
    phone: "+381 66 2222",
    email: "blabla2@godnamestaj.rs",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.0758371547584!2d20.41450231555062!3d44.83083857909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6588a9e084f1%3A0x5f95283a64e8c9a8!2z0JHRg9C70LXQstCw0YAg0JzQuNGF0LDQuNC70LAg0J_Rg9C_0LjQvdCwIDExNSwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1714501234567!5m2!1ssr!2srs",
  },
  {
    name: "Salon3",
    address: "Milunke Savic 3, Kraljevo",
    phone: "+381 66 3333",
    email: "blabla3@godnamestaj.rs",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.0758371547584!2d20.68950231555062!3d43.72383857909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0c240c81f75%3A0xe12ce63c7d3ff54c!2z0JrRgNCw0ZnQtdCy0L4!5e0!3m2!1ssr!2srs!4v1714501234567!5m2!1ssr!2srs",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1474&auto=format&fit=crop"
            alt="Kontaktirajte nas"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktirajte nas</h1>
          <p className="text-xl max-w-2xl">
            Imate pitanje ili želite da naručite nameštaj? Kontaktirajte nas i odgovorićemo vam u najkraćem roku.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Naši saloni</h2>

              <div className="space-y-12 mb-12">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{location.name}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-600">{location.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-600">{location.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-600">{location.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Radno vreme</h3>
                    <p className="text-gray-600">Ponedeljak - Petak: 09:00 - 17:00</p>
                    <p className="text-gray-600">Subota: 09:00 - 14:00</p>
                    <p className="text-gray-600">Nedelja: Zatvoreno</p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 text-lg mb-4">Pratite nas</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Pošaljite nam poruku</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Naše lokacije</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4 bg-orange-600 text-white">
                  <h3 className="font-bold text-lg">{location.name}</h3>
                  <p className="text-sm text-white/90">{location.address}</p>
                </div>
                <div className="h-[300px] w-full">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
