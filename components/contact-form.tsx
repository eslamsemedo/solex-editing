"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Upload, X, FileText, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  institution: string
  services: string[]
  manuscriptType: string
  wordCount: string
  message: string
  consent: boolean
}

const serviceOptions = [
  "Substantive Editing",
  "Copy Editing",
  "Proofreading",
  "Pre-Submission Peer Review",
  "Plagiarism Check",
  "Formatting & Artwork",
  "Rejected Paper Editing",
]

const manuscriptTypes = [
  "Research Article",
  "Review Article",
  "Case Study",
  "Conference Paper",
  "Thesis/Dissertation",
  "Book Chapter",
  "Grant Proposal",
  "Other",
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    institution: "",
    services: [],
    manuscriptType: "",
    wordCount: "",
    message: "",
    consent: false,
  })

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)
  const successRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showSuccess && scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [showSuccess])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file type
      const allowedTypes = [".doc", ".docx", ".pdf", ".zip"]
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

      if (!allowedTypes.includes(fileExtension)) {
        setErrors((prev) => ({ ...prev, file: "Please upload a .doc, .docx, .pdf, or .zip file" }))
        return
      }

      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: "File size must be less than 10MB" }))
        return
      }

      setUploadedFile(file)
      setErrors((prev) => ({ ...prev, file: "" }))
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.consent) newErrors.consent = "You must agree to the terms and privacy policy"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "services") {
          submitData.append(key, JSON.stringify(value))
        } else {
          submitData.append(key, value.toString())
        }
      })

      if (uploadedFile) {
        submitData.append("file", uploadedFile)
      }

      const response = await fetch("/api/request-quote", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        setTimeout(() => {
          setIsSubmitted(true)
          setShowSuccess(true)
        }, 500) // 500ms delay for smooth transition
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      setErrors({ submit: "Failed to submit form. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div ref={scrollWrapperRef}>
        <div ref={successRef} className="bg-[#f9f5ef] rounded-2xl shadow-lg p-8 text-center transition-opacity duration-500 opacity-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#0070f3] mb-4">Thank You!</h2>
          <p className="text-[#22292F] mb-4">
            Your request has been submitted successfully. We'll review your manuscript and send you a detailed quote within 24 hours.
          </p>
          <p className="text-sm text-[#22292F]">
            Reference Number: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f9f5ef] rounded-2xl shadow-lg p-8">
      <h2 className="font-serif text-2xl font-bold text-[#0070f3] mb-6 text-center">Request a Quote</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#22292F] mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0070f3] focus:border-transparent bg-[#FAF8F6]"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#22292F] mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0070f3] focus:border-transparent bg-[#FAF8F6]"
              placeholder="your.email@institution.edu"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-[#22292F] mb-2">
            Institution (Optional)
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0070f3] focus:border-transparent bg-[#FAF8F6]"
            placeholder="University or research institution"
          />
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-medium text-[#22292F] mb-3">Services Needed</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="w-4 h-4 text-[#0070f3] border-gray-300 rounded focus:ring-[#0070f3]"
                />
                <span className="text-sm text-[#22292F]">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Manuscript Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="manuscriptType" className="block text-sm font-medium text-[#22292F] mb-2">
              Manuscript Type
            </label>
            <select
              id="manuscriptType"
              name="manuscriptType"
              value={formData.manuscriptType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0070f3] focus:border-transparent bg-[#FAF8F6]"
            >
              <option value="">Select type</option>
              {manuscriptTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="wordCount" className="block text-sm font-medium text-[#22292F] mb-2">
              Word Count (Optional)
            </label>
            <input
              type="number"
              id="wordCount"
              name="wordCount"
              value={formData.wordCount}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0070f3] focus:border-transparent bg-[#FAF8F6]"
              placeholder="Approximate word count"
            />
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-[#22292F] mb-2">Upload Manuscript (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0070f3] transition-colors">
            {uploadedFile ? (
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-[#0070f3]" />
                  <span className="text-[#22292F]">{uploadedFile.name}</span>
                  <button type="button" onClick={removeFile} className="text-red-600 hover:underline ml-2">
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <Upload className="w-8 h-8 text-[#0070f3] mb-2" />
                <span className="text-[#22292F]">Click to upload .doc, .docx, .pdf, or .zip (max 10MB)</span>
                <input
                  type="file"
                  accept=".doc,.docx,.pdf,.zip"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            )}
            {errors.file && <p className="text-red-600 text-sm mt-1">{errors.file}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#22292F] mb-2">
            Message / Notes (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0070f3] focus:border-transparent bg-[#FAF8F6]"
            placeholder="Any specific requirements or questions..."
          />
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#0070f3] border-gray-300 rounded focus:ring-[#0070f3] mt-1"
            />
            <span className="text-sm text-[#22292F]">
              I agree to the{" "}
              <a href="/terms" className="text-[#0070f3] hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#0070f3] hover:underline">
                Privacy Policy
              </a>
              . *
            </span>
          </label>
          {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF9900] hover:bg-[#e88a00] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
          {errors.submit && <p className="text-red-600 text-sm mt-2">{errors.submit}</p>}
        </div>
      </form>
    </div>
  )
}
