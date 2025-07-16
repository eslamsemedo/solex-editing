import Link from "next/link"
import { FileText, Mail, PhoneCall } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#FAF8F6] text-[#22292F] border-t border-gray-200 shadow-inner">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF9900] to-[#0070f3] rounded-full flex items-center justify-center shadow overflow-hidden">
                <Image
                  src="/hero/logo.jpeg"
                  alt="SOLEX EDITING Logo"
                  width={50}
                  height={50}
                  className="object-contain w-11 h-11"
                  priority
                />
              </div>
              <span className="font-serif text-2xl font-bold text-[#0070f3]">SOLEX EDITING</span>
            </Link>
            <p className="text-[#22292F] mb-4 max-w-md">
              Expert academic editing and publication support to help researchers worldwide publish with clarity and confidence. Bringing your research into the light.
            </p>
            <div className="flex flex-col space-x-4 gap-3 ">
              <a
                href="tel:+201094412964"
                className="flex items-center space-x-2 text-[#22292F] hover:text-[#0070f3] transition-colors"
              >

                <PhoneCall className="w-4 h-4" />
                <span>+201094412964</span>
              </a>
              <a
                href="mailto:info@arbor-editing.com"
                className="flex items-center space-x-2 text-[#22292F] hover:text-[#0070f3] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@arbor-editing.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-gray hover:text-bg-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-gray hover:text-bg-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-gray hover:text-bg-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-gray hover:text-bg-brand-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-brand-gray hover:text-bg-brand-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-brand-gray hover:text-bg-brand-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8 text-center">
          <p className="text-brand-gray text-sm"> {currentYear} SOLEX EDITING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
