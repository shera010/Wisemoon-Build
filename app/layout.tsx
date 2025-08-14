import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wise Moon Build | Premium Custom Storage Solutions Calgary | Transform Your Space',
  description: 'Calgary\'s premier custom closet and cabinetry specialists. Beautiful, functional storage solutions for your home. Free consultation. Call 587-500-2477 today.',
  keywords: 'custom closets Calgary, wardrobe installers Calgary, mudroom cabinets Calgary, built-in cabinetry Calgary, custom storage solutions',
  authors: [{ name: 'Wise Moon Build' }],
  openGraph: {
    title: 'Wise Moon Build | Premium Custom Storage Solutions Calgary',
    description: 'Transform your space with premium custom closets, wardrobes, and cabinetry. Calgary\'s trusted storage specialists.',
    url: 'https://wisemoonbuild.com',
    siteName: 'Wise Moon Build',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wise Moon Build | Premium Custom Storage Solutions Calgary',
    description: 'Transform your space with premium custom closets, wardrobes, and cabinetry. Calgary\'s trusted storage specialists.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wise Moon Build",
              "description": "Custom closets, wardrobes, mudrooms and cabinetry serving Calgary and surrounding areas",
              "url": "https://wisemoonbuild.com",
              "telephone": "+1-587-500-2477",
              "email": "info@wisemoonbuild.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "addressCountry": "CA"
              },
              "areaServed": ["Calgary", "Airdrie", "Okotoks", "Chestermere", "Cochrane"],
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
              "priceRange": "$1500-$5000",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Custom Storage Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Closets",
                      "description": "Walk-in and reach-in custom closets with premium materials and soft-close hardware"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "minPrice": "2000",
                      "priceCurrency": "CAD"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}