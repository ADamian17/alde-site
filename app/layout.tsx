import type { Metadata } from "next";
import { builder } from '@builder.io/sdk';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const metadata: Metadata = {
  title: "Denis Mobil Detailing - Pricing",
  description: "Professional auto detailing services",
  metadataBase: new URL("https://aldenisdetialing.vercel.app/"),
  openGraph: {
    title: "Denis Mobil Detailing - Pricing",
    description: "Professional auto detailing services",
    url: 'https://aldenisdetialing.vercel.app/',
    siteName: "Denis Mobil Detailing - Pricing",
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

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <html lang="en" {...mantineHtmlProps}>
    <head>
      <ColorSchemeScript />
    </head>
    <body>
      <MantineProvider>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
