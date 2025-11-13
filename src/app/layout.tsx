import type { Metadata } from "next";
import "./globals.css";
import {Poppins, Lato} from "next/font/google"
import { GoogleTagManager } from "./scripts/GoogleTagManager";
import Script from "next/script";

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
    icon: 'https://advogados-landing-page.onrender.com/logo.svg'
  },
  openGraph: {
    images: [
      {
        url: 'https://advogados-landing-page.onrender.com/website-preview-1200x504.png',
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
      <head>
        <Script id="google-tag-manager" 
    strategy="afterInteractive" 
    dangerouslySetInnerHTML={{
      __html: `
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KFGWWR6X');</script>
      <!-- End Google Tag Manager -->
      `
    }}/>
      </head>
      <body
        className={`antialiased`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFGWWR6X"
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
