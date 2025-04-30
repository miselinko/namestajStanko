import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <Link href="/">
              <div className="relative h-12 w-32 mb-4">
                <Image src="/logo.png" alt="GOD nameštaj logo" fill className="object-contain brightness-0 invert" />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Specijalizovani smo za izradu svih vrsta kreveta i nameštaja po meri. Kvalitet i zadovoljstvo kupaca su
              naš prioritet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/o-nama" className="text-gray-400 hover:text-white transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/proizvodi" className="text-gray-400 hover:text-white transition-colors">
                  Proizvodi
                </Link>
              </li>
              <li>
                <Link href="/galerija" className="text-gray-400 hover:text-white transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Proizvodi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/proizvodi/bracni-kreveti" className="text-gray-400 hover:text-white transition-colors">
                  Bračni kreveti
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/trosedi" className="text-gray-400 hover:text-white transition-colors">
                  Trosedi
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/garniture" className="text-gray-400 hover:text-white transition-colors">
                  Garniture
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/deciji-kreveti" className="text-gray-400 hover:text-white transition-colors">
                  Dečiji kreveti
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/kreveti-po-meri" className="text-gray-400 hover:text-white transition-colors">
                  Kreveti po meri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+381 XX XXX XXXX</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@godnamestaj.rs</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Vaša adresa, Grad, Srbija</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GOD nameštaj. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
