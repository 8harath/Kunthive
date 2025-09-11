import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AvalonGroup - Student Web Development Collective | Bangalore",
  description:
    "Building portfolios, learning together. Affordable web solutions by curious students in Bangalore. Free domains included with every project.",
  generator: "AvalonGroup",
  keywords: [
    "web development",
    "student collective",
    "Bangalore web developers",
    "portfolio website",
    "affordable web design",
    "landing pages",
    "full-stack development",
    "SEO optimization",
    "UI/UX design",
    "free domain",
    "student freelancers",
    "web applications",
  ],
  authors: [{ name: "AvalonGroup", url: "https://avalongroup.tech" }],
  creator: "AvalonGroup",
  publisher: "AvalonGroup",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avalongroup.tech",
    title: "AvalonGroup - Student Web Development Collective",
    description: "Building portfolios, learning together. Affordable web solutions by curious students in Bangalore.",
    siteName: "AvalonGroup",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AvalonGroup - Student Web Development Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AvalonGroup - Student Web Development Collective",
    description: "Building portfolios, learning together. Affordable web solutions by curious students in Bangalore.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://avalongroup.tech",
  },
  category: "technology",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AvalonGroup",
  description: "Student-led web development collective based in Bangalore",
  url: "https://avalongroup.tech",
  logo: "https://avalongroup.tech/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@avalongroup.tech",
    contactType: "customer service",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [],
  foundingDate: "2024",
  numberOfEmployees: "2-10",
  knowsAbout: [
    "Web Development",
    "Portfolio Design",
    "Landing Pages",
    "Full-Stack Development",
    "SEO Optimization",
    "UI/UX Design",
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AvalonGroup",
  description: "Student-led web development collective offering affordable web solutions",
  url: "https://avalongroup.tech",
  telephone: "+91-XXXXXXXXXX",
  email: "hello@avalongroup.tech",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "₹₹",
  serviceArea: {
    "@type": "Place",
    name: "Global",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <link rel="canonical" href="https://avalongroup.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f4ed" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
