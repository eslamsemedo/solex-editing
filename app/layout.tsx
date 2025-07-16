import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "SOLEX EDITING | Academic Editing & Publication Support",
  description:
    "Expert academic editing, peer review, plagiarism checks, and journal-ready formatting to help your manuscript get accepted. Submit your paper today.",
  keywords: "academic editing, manuscript editing, publication support, peer review, proofreading, copy editing",
  authors: [{ name: "SOLEX EDITING" }],
  openGraph: {
    title: "SOLEX EDITING | Academic Editing & Publication Support",
    description:
      "Expert academic editing, peer review, plagiarism checks, and journal-ready formatting to help your manuscript get accepted",
    type: "website",
    locale: "en_US",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-[#f9f5ef] text-neutral-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}
