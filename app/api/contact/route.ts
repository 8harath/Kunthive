import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check honeypot field
    if (body.website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would integrate with EmailJS server-side or send email directly
    // For now, we'll simulate success

    // Example EmailJS server-side integration:
    /*
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: body.name,
          from_email: body.email,
          company: body.company,
          budget: body.budget,
          message: body.description,
          timeline: body.timeline,
        },
      }),
    })

    if (!emailjsResponse.ok) {
      throw new Error('Failed to send email')
    }
    */

    // Log the form submission (in production, you'd save to database or send email)
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      company: body.company,
      budget: body.budget,
      description: body.description,
      timeline: body.timeline,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
