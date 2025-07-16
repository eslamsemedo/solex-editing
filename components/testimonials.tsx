"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "Assistant Professor, Biomedical Engineering",
    institution: "Stanford University",
    content:
      "SOLEX Editing transformed my manuscript. Their substantive editing improved the clarity and flow significantly, leading to acceptance in a top-tier journal.",
    rating: 5,
  },
  {
    name: "Prof. Ahmed Hassan",
    title: "Research Director",
    institution: "Cairo University",
    content:
      "As a non-native English speaker, I was concerned about language barriers. SOLEX provided excellent ESL support while maintaining my voice and technical accuracy.",
    rating: 5,
  },
  {
    name: "Dr. Maria Rodriguez",
    title: "Postdoctoral Researcher",
    institution: "University of Barcelona",
    content:
      "The publication support suite was invaluable. From formatting to reviewer response letters, they guided me through the entire submission process.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#0070f3] mb-4">What Our Authors Say</h2>
          <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
            Trusted by researchers worldwide for quality and reliability
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 relative p-8 md:p-12 rounded-2xl shadow-lg animate-fade-in">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#FF9900] fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-[#22292F] text-center mb-6 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="text-center">
              <p className="font-semibold text-[#0070f3]">{testimonials[currentIndex].name}</p>
              <p className="text-[#22292F] text-sm">{testimonials[currentIndex].title}</p>
              <p className="text-[#22292F] text-sm">{testimonials[currentIndex].institution}</p>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#f9f5ef] hover:bg-gray-50 transition-colors shadow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#0070f3]" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-[#FF9900]" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#f9f5ef] hover:bg-gray-50 transition-colors shadow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#0070f3]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
