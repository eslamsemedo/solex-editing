import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, Clock, Shield, Globe } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contact Us | SOLEX EDITING",
  description:
    "Get in touch with SOLEX EDITING for academic editing services. Upload your manuscript for a free quote or contact us with any questions.",
}

export default function ContactPage() {
  const contactFeatures = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get your quote within 24 hours",
    },
    {
      icon: Shield,
      title: "Secure Upload",
      description: "Your files are protected and confidential",
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Available worldwide, all time zones",
    },
    {
      icon: Mail,
      title: "Direct Communication",
      description: "Work directly with your assigned editor",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FAF8F6] to-[#f9f5ef] relative overflow-hidden bg-[url('/globe.svg')] bg-no-repeat bg-right-top bg-[length:400px_400px]">
          {/* Hero Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/hero/hero4.jpg"
              alt="Contact Hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F6]/60 to-white/70" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0070f3] mb-6">
                Ready to Improve Your Manuscript?
              </h1>
              <p className="text-xl text-[#22292F] mb-8 leading-relaxed">
                Get in touch or upload your file for a free quote. We're here to help your research reach its full
                potential.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Features */}
        <section className="py-12 bg-[#f9f5ef]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {contactFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-[#f9f5ef] rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-[#FF9900] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#0070f3] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#22292F]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-[#FAF8F6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="py-12 bg-[#f9f5ef]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl font-bold text-[#0070f3] mb-4">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-[#FF9900]" />
                  <a
                    href="mailto:info@solexediting.com"
                    className="text-[#0070f3] hover:text-[#FF9900] transition-colors"
                  >
                    info@solexediting.com
                  </a>
                </div>
                <p className="text-[#22292F] text-sm">We typically respond to all inquiries within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
