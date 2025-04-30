"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"

const navigation = [
  { name: "Početna", href: "/" },
  { name: "O nama", href: "/o-nama" },
  {
    name: "Proizvodi",
    href: "/proizvodi",
    submenu: [
      { name: "Bračni kreveti", href: "/proizvodi/bracni-kreveti" },
      { name: "Trosedi", href: "/proizvodi/trosedi" },
      { name: "Garniture", href: "/proizvodi/garniture" },
      { name: "Dečiji kreveti", href: "/proizvodi/deciji-kreveti" },
      { name: "Kreveti po meri", href: "/proizvodi/kreveti-po-meri" },
    ],
  },
  { name: "Galerija", href: "/galerija" },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+381 XX XXX XXXX</span>
          </div>
          <div className="text-sm">Radno vreme: Pon-Pet 09-17h, Sub 09-14h</div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-12 w-32">
                <Image src="/logo.png" alt="GOD nameštaj logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    className="flex items-center text-gray-700 hover:text-orange-600 font-medium"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-orange-600 font-medium">
                    {item.name}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact button */}
          <Button className="hidden md:block bg-orange-600 hover:bg-orange-700">Kontaktirajte nas</Button>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeSubmenu === item.name && (
                      <div className="pl-4 space-y-1 border-l-2 border-orange-200 mt-1 mb-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 text-gray-600 hover:text-orange-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 font-medium hover:text-orange-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Kontaktirajte nas</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
