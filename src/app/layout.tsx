import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hiath & Sales Adv",
  description: "Escritório de Advocacia - advogados de família e trabalhista",
  icons: {
    icon: '/logo-with-background.svg'
  },
  openGraph: {
    images: [
      {
        url: 'https://advogados-landing-page.onrender.com/website-preview.png',
        width:1200,
        height:630
      }
    ],
    title: "Hiath & Sales Adv",
    description: "Escritório de Advocacia - advogados de família e trabalhista",
    siteName: "Hiath & Sales Adv",
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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
