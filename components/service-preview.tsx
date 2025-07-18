import Link from "next/link"
import { Edit3, FileCheck, Eye, Award } from "lucide-react"

export default function ServicePreview() {
  const services = [
    {
      icon: Edit3,
      title: "Substantive Editing",
      description: "Improve structure, argument clarity, tone, and flow for maximum impact.",
      href: "/services#substantive-editing",
    },
    {
      icon: FileCheck,
      title: "Copy Editing",
      description: "Perfect grammar, usage, terminology, and style guide compliance.",
      href: "/services#copy-editing",
    },
    {
      icon: Eye,
      title: "Proofreading",
      description: "Final polish for typos, punctuation, and minor formatting issues.",
      href: "/services#proofreading",
    },
    {
      icon: Award,
      title: "Publication Support",
      description: "Complete suite including peer review, formatting, and submission support.",
      href: "/services#publication-support",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f9f5ef]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#0070f3] mb-4">Our Services</h2>
          <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
            Comprehensive editing and publication support tailored to your research needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-[#f9f5ef] rounded-2xl shadow-lg p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#FF9900] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-[#0070f3] mb-2">{service.title}</h3>
              <p className="text-[#22292F] text-base leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
