import type { Metadata } from "next";
import "./globals.css";
import {Poppins, Lato} from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'auto'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'auto'
});

export const metadata: Metadata = {
  title: "Hiath & Sales Adv",
  description: "Escritório de Advocacia - advogados de família e trabalhista",
  icons: {
    icon: 'https://advogados-landing-page-static.onrender.com/logo.png'
  },
  openGraph: {
    images: [
      {
        url: 'https://advogados-landing-page-static.onrender.com/website-preview-1200x504.png',
        width:1200,
        height:630
      }
    ],
    title: "Hiath & Sales Adv",
    description: "Escritório de Advocacia - advogados de família e trabalhista",
    siteName: "Morelo & Sílva Adv",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
