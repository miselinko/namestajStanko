"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marko Petrović",
    role: "Zadovoljni kupac",
    content:
      "Izuzetno sam zadovoljan kvalitetom bračnog kreveta koji sam kupio. Materijali su prvoklasni, a izrada perfektna. Preporučujem GOD nameštaj svima!",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ana Jovanović",
    role: "Zadovoljni kupac",
    content:
      "Kupili smo garnituru za dnevnu sobu i oduševljeni smo. Udobnost je na najvišem nivou, a dizajn se savršeno uklapa u naš prostor. Hvala GOD nameštaju na profesionalnosti!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Milan Nikolić",
    role: "Zadovoljni kupac",
    content:
      "Krevet po meri koji smo naručili je tačno onakav kakav smo zamislili. Komunikacija je bila odlična, a rokovi ispoštovani. Definitivno ćemo ponovo sarađivati.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Šta kažu naši kupci</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Prethodno"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Sledeće"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonial */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-orange-200" />
            </div>

            <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <p className="text-lg md:text-xl text-gray-700 text-center mb-8">{testimonials[currentIndex].content}</p>

              <div className="flex flex-col items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-orange-600" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
