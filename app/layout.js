import './globals.css';
import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ThemeProvider from '../components/ThemeProvider';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1220',
};

export const metadata = {
  title: 'Ofclock — Deploy Apps & Databases in Minutes',
  description: 'Deploy application and database instances in seconds. Connect your domain and start building fast—WordPress, n8n, MySQL, MongoDB, and more...',
  applicationName: 'Ofclock',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/Ofclock-icon.svg',
    apple: '/logo-ofclock.svg'
  },
  manifest: '/manifest.json',
  keywords: ['Ofclock', 'deploy apps', 'deploy databases', 'WordPress hosting', 'n8n hosting', 'MySQL', 'MongoDB', 'cloud hosting', 'custom domains', 'SSL'],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Ofclock — Deploy Apps & Databases in Minutes',
    description: 'Launch WordPress, n8n, MySQL, MongoDB, and more. Connect your domain, get free SSL, and scale fast.',
    siteName: 'Ofclock',
    images: [
      { url: '/Open-Graph.png', alt: 'Ofclock — Deploy Apps & Databases in Minutes' }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ofclock — Deploy Apps & Databases in Minutes',
    description: 'Launch WordPress, n8n, MySQL, MongoDB, and more. Connect your domain, get free SSL, and scale fast.',
    images: ['/Twitter.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  verification: {
    google: googleVerification,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-950 antialiased`}>
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Ofclock',
          url: siteUrl,
          logo: `${siteUrl}/Ofclock-icon.svg`,
          sameAs: [],
        })}</Script>
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Ofclock',
          url: siteUrl,
        })}</Script>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
