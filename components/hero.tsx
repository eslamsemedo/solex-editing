import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const trustPoints = ["Subject-Expert Editors", "Confidential & Secure", "Journal-Ready Formatting", "Fast Turnaround"]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FAF8F6] to-[#f9f5ef] relative overflow-hidden bg-[url('/globe.svg')] bg-no-repeat bg-right-top bg-[length:400px_400px]">
      {/* Full-section Hero Image */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/hero/hero3.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F6]/55 to-white/65 pointer-events-none z-10" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#0070f3] mb-8 leading-tight tracking-tight animate-fade-in">
            Bring Your Research Into the Light
          </h1>
          <p className="text-2xl md:text-3xl text-[#22292F] mb-10 leading-relaxed animate-fade-in">
            Expert academic editing and publication support to help your manuscript get accepted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in">
            <Link href="/contact" className="inline-flex items-center bg-[#FF9900] hover:bg-[#e88a00] text-white font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2">
              Submit Manuscript
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/services" className="bg-[#f9f5ef] hover:bg-gray-50 text-[#0070f3] border border-[#0070f3] font-semibold px-6 py-3 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0070f3] focus:ring-offset-2">
              View Services
            </Link>
          </div>

          {/* Trust Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-[#FF9900]/10 rounded-full flex items-center justify-center shadow">
                  <CheckCircle className="w-7 h-7 text-[#FF9900]" />
                </div>
                <p className="text-base font-medium text-[#22292F] text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
