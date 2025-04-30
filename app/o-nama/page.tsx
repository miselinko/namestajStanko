import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop"
            alt="Radionica za izradu nameštaja"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O nama</h1>
          <p className="text-xl max-w-2xl">
            Upoznajte GOD nameštaj - vašeg pouzdanog partnera za kvalitetan nameštaj po meri
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Naša priča</h2>
              <p className="text-lg text-gray-600 mb-6">
                GOD nameštaj je porodična firma koja je osnovana sa strašću prema izradi kvalitetnog nameštaja. Naša
                priča počinje pre više od 15 godina, kada smo odlučili da svoje zanatsko umeće i ljubav prema drvetu
                pretvorimo u posao.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Od skromnih početaka u maloj radionici, izrasli smo u prepoznatljiv brend koji je sinonim za kvalitet,
                izdržljivost i estetiku. Specijalizovali smo se za izradu svih vrsta kreveta, garnitura i troseda, uvek
                sa fokusom na detalje i potrebe naših kupaca.
              </p>
              <p className="text-lg text-gray-600">
                Danas, naš tim čine iskusni majstori i dizajneri koji zajedno rade na stvaranju nameštaja koji će
                ulepšati vaš dom i trajati generacijama.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1470&auto=format&fit=crop"
                alt="Radionica GOD nameštaja"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Naše vrednosti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kvalitet",
                description:
                  "Koristimo samo najkvalitetnije materijale i posvećujemo pažnju svakom detalju kako bismo stvorili nameštaj koji će trajati generacijama.",
                image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1528&auto=format&fit=crop",
              },
              {
                title: "Kreativnost",
                description:
                  "Svaki komad nameštaja je jedinstven i izrađen sa kreativnošću i strašću. Pratimo trendove, ali dodajemo i svoj lični pečat.",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop",
              },
              {
                title: "Zadovoljstvo kupaca",
                description:
                  "Naš glavni cilj je zadovoljstvo naših kupaca. Slušamo vaše potrebe i želje kako bismo stvorili nameštaj koji će ispuniti vaša očekivanja.",
                image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1470&auto=format&fit=crop",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image src={value.image || "/placeholder.svg"} alt={value.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Naš proces izrade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Konsultacije",
                description: "Razgovaramo sa vama o vašim potrebama, željama i prostoru za koji je nameštaj namenjen.",
              },
              {
                step: "Dizajn",
                description: "Kreiramo dizajn koji odgovara vašim zahtevima i uklapamo ga u vaš prostor.",
              },
              {
                step: "Izrada",
                description:
                  "Naši iskusni majstori pažljivo izrađuju svaki komad nameštaja, posvećujući pažnju svakom detalju.",
              },
              {
                step: "Isporuka",
                description: "Dostavljamo gotov proizvod do vašeg doma i po potrebi vršimo montažu.",
              },
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{process.step}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop"
                alt="Kvalitetan nameštaj"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Zašto izabrati nas</h2>
              <p className="text-lg text-gray-600 mb-6">
                Kada birate GOD nameštaj, birate kvalitet, pouzdanost i jedinstveni dizajn. Evo nekoliko razloga zašto
                smo mi pravi izbor za vaš dom:
              </p>
              <ul className="space-y-4">
                {[
                  "Više od 15 godina iskustva u izradi nameštaja",
                  "Korišćenje samo najkvalitetnijih materijala",
                  "Mogućnost izrade po meri prema vašim potrebama",
                  "Garancija na sve proizvode",
                  "Besplatna dostava i montaža",
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="bg-orange-600 hover:bg-orange-700">Kontaktirajte nas</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Naš tim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marko Petrović",
                role: "Osnivač i glavni dizajner",
                bio: "Sa više od 20 godina iskustva u industriji nameštaja, Marko je srce i duša GOD nameštaja.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
              },
              {
                name: "Ana Jovanović",
                role: "Dizajner enterijera",
                bio: "Ana pomaže klijentima da pronađu savršen nameštaj koji će se uklopiti u njihov prostor i stil.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
              },
              {
                name: "Nikola Đorđević",
                role: "Glavni majstor",
                bio: "Sa okom za detalje i strašću prema zanatu, Nikola vodi tim majstora koji stvaraju naš nameštaj.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-orange-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
