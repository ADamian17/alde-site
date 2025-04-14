import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dennis Detailing - Pricing",
  description: "Professional auto detailing services",
  metadataBase: new URL("https://alde-site.vercel.app/"),
  openGraph: {
    title: "Dennis Detailing - Pricing",
    description: "Professional auto detailing services",
    url: 'https://alde-site.vercel.app/',
    siteName: "Dennis Detailing - Pricing",
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa8b7a0b825e42fb9e2d36413f883aea%2F810d4ea4dc8644a785ceaeaed60ebd25', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa8b7a0b825e42fb9e2d36413f883aea%2F810d4ea4dc8644a785ceaeaed60ebd25', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
