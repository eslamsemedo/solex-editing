import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const quoteRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  institution: z.string().optional(),
  services: z.string().transform((str) => JSON.parse(str)),
  manuscriptType: z.string().optional(),
  wordCount: z.string().optional(),
  message: z.string().optional(),
  consent: z.string().transform((str) => str === "true"),
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      institution: formData.get("institution") as string,
      services: formData.get("services") as string,
      manuscriptType: formData.get("manuscriptType") as string,
      wordCount: formData.get("wordCount") as string,
      message: formData.get("message") as string,
      consent: formData.get("consent") as string,
    }

    // Validate the data
    const validatedData = quoteRequestSchema.parse(data)

    // Handle file upload (placeholder - would integrate with storage service)
    let fileUrl = null
    if (file) {
      // In production, upload to S3, Google Cloud Storage, etc.
      // For now, we'll just log the file info
      console.log("File uploaded:", {
        name: file.name,
        size: file.size,
        type: file.type,
      })
      fileUrl = `/uploads/${file.name}` // Placeholder URL
    }

    // Create quote request object
    const quoteRequest = {
      ...validatedData,
      fileUrl,
      createdAt: new Date(),
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
    }

    // In production, save to database
    console.log("Quote request received:", quoteRequest)

    // Send notification email (placeholder)
    const emailContent = `
      New quote request received:
      
      Name: ${validatedData.name}
      Email: ${validatedData.email}
      Institution: ${validatedData.institution || "Not provided"}
      Services: ${validatedData.services.join(", ")}
      Manuscript Type: ${validatedData.manuscriptType || "Not specified"}
      Word Count: ${validatedData.wordCount || "Not provided"}
      Message: ${validatedData.message || "None"}
      File: ${file ? file.name : "No file uploaded"}
      
      Request ID: ${quoteRequest.id}
    `

    // In production, send actual email using service like SendGrid, AWS SES, etc.
    console.log("Email notification:", emailContent)

    // Configure the transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    })

    // Send the email with or without attachment
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await transporter.sendMail({
        from: `SOLEX Editing <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: "New Quote Request Received",
        text: emailContent,
        attachments: [
          {
            filename: file.name,
            content: buffer,
            contentType: file.type,
          },
        ],
      });
    } else {
      await transporter.sendMail({
        from: `SOLEX Editing <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: "New Quote Request Received",
        text: emailContent,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
      requestId: quoteRequest.id,
    })
  } catch (error) {
    console.error("Error processing quote request:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 })
    }

    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
