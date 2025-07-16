"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <nav className="bg-[#f9f5ef] shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
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
            <span className="font-serif text-2xl font-bold text-[#0070f3] tracking-tight">SOLEX EDITING</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className="text-gray-500 hover:text-[#0070f3] transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-[#FF9900] hover:bg-[#e88a00] text-white font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2">
              Submit Manuscript
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-[#0070f3] focus:outline-none focus:ring-2 focus:ring-[#0070f3] focus:ring-offset-2 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pointer-events-auto py-6' : 'max-h-0 opacity-0 pointer-events-none'
            } border-t border-gray-100 bg-[#f9f5ef] rounded-b-2xl shadow-lg`}
        >
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-[#0070f3] transition-colors duration-200 font-medium px-2 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-[#FF9900] hover:bg-[#e88a00] text-white font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2 w-full text-center" onClick={() => setIsOpen(false)}>
              Submit Manuscript
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
