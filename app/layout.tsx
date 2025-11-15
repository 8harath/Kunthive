import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://avalongroup.tech"),
  title: {
    default: "AvalonGroup - Professional Web Development | Bangalore",
    template: "%s | AvalonGroup",
  },
  description:
    "Transform your vision into reality with AvalonGroup. Student-led web development collective in Bangalore offering professional web design, development, and SEO services. Free .tech domain included. Mobile-first, SEO-optimized solutions.",
  generator: "Next.js",
  applicationName: "AvalonGroup",
  referrer: "origin-when-cross-origin",
  keywords: [
    "web development bangalore",
    "affordable web design india",
    "student web developers",
    "professional website design",
    "portfolio website creation",
    "landing page design",
    "full-stack development services",
    "SEO optimization services",
    "UI/UX design agency",
    "free domain hosting",
    "react next.js development",
    "responsive web design",
    "mobile-first development",
    "e-commerce website",
    "custom web applications",
    "startup web development",
    "business website design",
    "wordpress alternative",
    "static site generation",
    "jamstack development",
  ],
  authors: [
    { name: "AvalonGroup", url: "https://avalongroup.tech" },
    { name: "AvalonGroup Team" },
  ],
  creator: "AvalonGroup",
  publisher: "AvalonGroup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avalongroup.tech",
    title: "AvalonGroup - Professional Web Development Collective",
    description:
      "Student-led web development in Bangalore. Professional websites, UI/UX design, and SEO services. Free .tech domain with every project.",
    siteName: "AvalonGroup",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AvalonGroup - Building the Future of Web",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AvalonGroup - Professional Web Development",
    description:
      "Student-led web development collective in Bangalore. Professional quality, competitive rates. Free domain included.",
    images: ["/og-image.jpg"],
    creator: "@avalongroup",
    site: "@avalongroup",
  },
  alternates: {
    canonical: "https://avalongroup.tech",
    languages: {
      "en-US": "https://avalongroup.tech",
      "en-GB": "https://avalongroup.tech",
    },
  },
  category: "technology",
  classification: "Web Development Services",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      me: ["hello@avalongroup.tech"],
    },
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AvalonGroup",
  alternateName: "Avalon Group Web Development",
  description: "Student-led web development collective based in Bangalore offering professional web design, development, and SEO services",
  url: "https://avalongroup.tech",
  logo: {
    "@type": "ImageObject",
    url: "https://avalongroup.tech/logo.png",
    width: "512",
    height: "512",
  },
  image: "https://avalongroup.tech/og-image.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@avalongroup.tech",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
    areaServed: "Worldwide",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/avalongroup",
    "https://twitter.com/avalongroup",
    "https://linkedin.com/company/avalongroup",
  ],
  foundingDate: "2024",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "2-10",
  },
  knowsAbout: [
    "Web Development",
    "Portfolio Design",
    "Landing Pages",
    "Full-Stack Development",
    "SEO Optimization",
    "UI/UX Design",
    "React Development",
    "Next.js Development",
    "Mobile-First Design",
    "Performance Optimization",
  ],
  slogan: "Building portfolios, learning together",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AvalonGroup",
  description: "Student-led web development collective offering professional web design, development, and SEO services at competitive rates",
  url: "https://avalongroup.tech",
  telephone: "+91-XXXXXXXXXX",
  email: "hello@avalongroup.tech",
  image: "https://avalongroup.tech/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Cash, Credit Card, UPI, PayPal",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946",
    },
    geoRadius: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom website and web application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "Professional user interface and experience design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          description: "Search engine optimization services",
        },
      },
    ],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AvalonGroup",
  url: "https://avalongroup.tech",
  description: "Professional web development collective based in Bangalore",
  publisher: {
    "@type": "Organization",
    name: "AvalonGroup",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://avalongroup.tech/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://avalongroup.tech",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://avalongroup.tech/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projects",
      item: "https://avalongroup.tech/projects",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://avalongroup.tech/contact",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <link rel="canonical" href="https://avalongroup.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#fef3c7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AvalonGroup" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LoadingScreen />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
