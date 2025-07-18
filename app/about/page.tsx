import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StatsBand from "@/components/stats-band"
import { Globe, Shield, Users, Award, BookOpen, Microscope } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About Us | SOLEX EDITING",
  description:
    "Learn about SOLEX EDITING's mission to help researchers worldwide publish with clarity and confidence through expert academic editing services.",
}

export default function AboutPage() {
  const differentiators = [
    {
      icon: Users,
      title: "Subject-Area Matching",
      description: "Our editors are matched to your specific field of research for expert, contextual feedback.",
    },
    {
      icon: Shield,
      title: "Dual Review Process",
      description: "Every manuscript undergoes editing plus senior quality assurance review for maximum quality.",
    },
    {
      icon: Globe,
      title: "ESL Support",
      description: "Specialized support for non-native English speakers while preserving your unique voice.",
    },
    {
      icon: Award,
      title: "Confidential & Secure",
      description: "Your research is protected with industry-standard security and confidentiality protocols.",
    },
  ]

  const teamStats = [
    { icon: BookOpen, count: "150+", label: "PhD Editors" },
    { icon: Microscope, count: "25+", label: "Research Fields" },
    { icon: Globe, count: "70+", label: "Countries Served" },
    { icon: Award, count: "18+", label: "Years Experience" },
  ]

  const workflowSteps = [
    {
      step: "01",
      title: "Manuscript Submission",
      description: "Upload your document through our secure platform with service preferences.",
    },
    {
      step: "02",
      title: "Expert Assignment",
      description: "We match your manuscript with a subject-matter expert editor.",
    },
    {
      step: "03",
      title: "Comprehensive Editing",
      description: "Thorough editing with tracked changes, comments, and detailed feedback.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Senior editor review ensures consistency and quality standards.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "Receive polished manuscript with ongoing support for revisions.",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FAF8F6] to-[#f9f5ef] relative overflow-hidden">
          {/* Full-section About Image */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/hero/hero2.jpg"
              alt="About Hero"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F6]/55 to-white/65 pointer-events-none z-10" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0070f3] mb-6">About SOLEX EDITING</h1>
              <p className="text-xl text-[#22292F] mb-8 leading-relaxed">
                Empowering researchers worldwide to publish with clarity and confidence through expert academic editing
                and publication support.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Band */}
        {/* <StatsBand /> */}

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0070f3] mb-6">Our Mission</h2>
              <p className="text-lg text-[#22292F] leading-relaxed mb-8">
                At SOLEX EDITING, we believe that groundbreaking research deserves to be shared with the world. Our
                mission is to help scholars worldwide overcome language barriers and publication challenges, ensuring
                their valuable contributions reach the global academic community with maximum impact and clarity.
              </p>
              <p className="text-lg text-[#22292F] leading-relaxed">
                We are committed to maintaining the highest standards of academic integrity while providing
                personalized, expert support that respects each author's unique voice and research perspective.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 md:py-24 bg-[#FAF8F6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0070f3] mb-4">
                What Makes Us Different
              </h2>
              <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
                Our commitment to quality, expertise, and personalized service sets us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="bg-[#f9f5ef] rounded-2xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-[#FF9900] rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-[#0070f3] mb-3">{item.title}</h3>
                  <p className="text-[#22292F] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0070f3] mb-4">Our Medical Experts</h2>
              <p className="text-lg text-[#22292F] max-w-2xl mx-auto mb-8">
                Experienced professionals across Surgery, Internal Medicine, Public Health, and Biomedical Research
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0070f3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-2xl text-[#0070f3] mb-1">{stat.count}</div>
                  <p className="text-[#22292F] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 md:py-24 bg-[#FAF8F6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0070f3] mb-4">Our Workflow</h2>
              <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
                A systematic approach ensuring quality and consistency in every project
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0070f3] rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-xl text-[#0070f3] mb-2">{step.title}</h3>
                    <p className="text-[#22292F] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-16 md:py-24 bg-[#0070f3] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Global Reach, Personal Touch</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              From emerging researchers to established academics, we've helped authors across 70+ countries share their
              discoveries with the world. Every manuscript receives the same dedicated attention and expert care,
              regardless of size or scope.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF9900] mb-2">24/7</div>
                <p className="text-blue-100">Global Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF9900] mb-2">48hr</div>
                <p className="text-blue-100">Quote Turnaround</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF9900] mb-2">99%</div>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
