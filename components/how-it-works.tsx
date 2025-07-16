import { Upload, DollarSign, Edit, Download } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Manuscript",
      description: "Submit your document through our secure platform",
    },
    {
      icon: DollarSign,
      title: "Get a Quote",
      description: "Receive a detailed quote within 24 hours",
    },
    {
      icon: Edit,
      title: "Expert Edit & Review",
      description: "Our subject-matter experts improve your manuscript",
    },
    {
      icon: Download,
      title: "Download & Submit",
      description: "Get your polished manuscript ready for publication",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#0070f3] mb-4">How It Works</h2>
          <p className="text-lg text-[#22292F] max-w-2xl mx-auto">
            Simple, transparent process to get your manuscript publication-ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#f9f5ef] rounded-2xl shadow-lg p-6 text-center relative">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#0070f3] rounded-full flex items-center justify-center mx-auto shadow">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF9900] rounded-full flex items-center justify-center text-white font-bold text-sm shadow">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-semibold text-xl text-[#0070f3] mb-2">{step.title}</h3>
              <p className="text-[#22292F] text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
