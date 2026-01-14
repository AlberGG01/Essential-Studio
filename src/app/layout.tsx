import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Essential Studio | Micropigmentación Artística en España - Cejas, Labios y Eyeliner",
  description: "Essential Studio - Micropigmentación de cejas, labios y eyeliner. Técnicas artísticas que respetan tu esencia y potencian tu belleza natural. Ainigriv Ferreira, especialista en micropigmentación con resultados armónicos y naturales.",
  keywords: "micropigmentación, microblading cejas, micropigmentación labios, eyeliner permanente, maquillaje semipermanente, Essential Studio, Ainigriv Ferreira, belleza natural, tratamientos estéticos, powder brows, microshading",
  authors: [{ name: "Ainigriv Ferreira" }],
  robots: "index, follow",
  openGraph: {
    title: "Essential Studio | Micropigmentación Artística - Realza tu Belleza Natural",
    description: "Micropigmentación de cejas, labios y eyeliner con técnicas artísticas. Cambios armónicos que respetan tu esencia.",
    type: "website",
    locale: "es_ES",
    siteName: "Essential Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Studio | Micropigmentación Artística",
    description: "Realza tu belleza natural con micropigmentación artística de cejas, labios y eyeliner.",
  },
  alternates: {
    canonical: "https://essentialstudio.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
