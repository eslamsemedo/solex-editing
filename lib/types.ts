export interface ServiceCategory {
  id: string
  name: string
  description: string
  services: Service[]
}

export interface Service {
  id: string
  name: string
  short: string
  long?: string
  features: string[]
  deliverables: string[]
}

export interface QuoteRequest {
  name: string
  email: string
  institution?: string
  services: string[]
  manuscriptType?: string
  wordCount?: number
  message?: string
  fileUrl?: string
  consent: boolean
  createdAt: Date
}

export interface StatItem {
  value: number
  label: string
  suffix?: string
}
