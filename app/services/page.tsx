import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { editingServices, publicationServices } from "@/content/services"
import { Clock, Users, FileText, CheckCircle } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Academic Editing Services | SOLEX EDITING",
  description:
    "Comprehensive academic editing services including substantive editing, copy editing, proofreading, and publication support for researchers worldwide.",
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div id={service.id} className="bg-[#f9f5ef] rounded-2xl shadow-lg border border-gray-200 p-8 scroll-mt-20">
      <h3 className="font-serif text-2xl font-bold text-[#0070f3] mb-4">{service.name}</h3>
      <p className="text-[#22292F] mb-6 leading-relaxed">{service.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-[#0070f3] mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-[#FF9900]" />
            What's Included
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="text-sm text-[#22292F] flex items-start">
                <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mt-2 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#0070f3] mb-3 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-[#FF9900]" />
            Deliverables
          </h4>
          <ul className="space-y-2">
            {service.deliverables.map((deliverable: string, index: number) => (
              <li key={index} className="text-sm text-[#22292F] flex items-start">
                <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mt-2 mr-3 flex-shrink-0" />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div className="flex items-center text-sm text-[#22292F]">
            <Clock className="w-4 h-4 mr-1 text-[#FF9900]" />
            {service.turnaround}
          </div>
          <div className="flex items-center text-sm text-[#22292F]">
            <Users className="w-4 h-4 mr-1 text-[#FF9900]" />
            {service.audience}
          </div>
        </div>
        <Link href="/contact" className="bg-[#FF9900] hover:bg-[#e88a00] text-white text-center font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2">
          Request This Service (0.025$/word)
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FAF8F6] to-[#f9f5ef] relative overflow-hidden ">
          {/* Hero Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/hero/hero1.jpg"
              alt="Academic Editing Hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="100vw"
              className="pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F6]/55 to-white/65" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0070f3] mb-6">
                Academic Editing Services
              </h1>
              <p className="text-xl text-[#22292F] mb-8 leading-relaxed">
                Comprehensive editing and publication support to strengthen your research and improve your chances of
                acceptance.
              </p>

              {/* Quick Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link
                  href="#editing-services"
                  className="px-4 py-2 bg-[#0070f3] text-white rounded-lg hover:bg-[#0059b2] transition-colors"
                >
                  Editing Services
                </Link>
                <Link
                  href="#publication-support"
                  className="px-4 py-2 bg-[#FF9900] text-white rounded-lg hover:bg-[#e88a00] transition-colors"
                >
                  Publication Support
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Editing Services */}
        <section id="editing-services" className="py-16 md:py-24 bg-[#f9f5ef] scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0070f3] mb-4">Editing Services</h2>
              <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
                Professional editing to improve clarity, accuracy, and impact
              </p>
            </div>

            <div className="space-y-8">
              {editingServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Publication Support */}
        <section id="publication-support" className="py-16 md:py-24 bg-[#FAF8F6] scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0070f3] mb-4">Publication Support</h2>
              <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
                End-to-end support for successful journal submission and publication
              </p>
            </div>

            <div className="space-y-8">
              {publicationServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#0070f3] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Manuscript?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with a free quote and see how we can help your research reach its full potential.
            </p>
            <Link href="/contact" className="bg-[#FF9900] hover:bg-[#e88a00] text-white font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2">
              Submit Your Manuscript
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
