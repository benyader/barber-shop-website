import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Royal Barbering — Barber Shop Jelenia Góra",
    template: "%s | Royal Barbering",
  },
  description:
    "Royal Barbering w Jeleniej Górze — klasyczny barbering, strzyżenie męskie, modelowanie brody i golenie brzytwą. ul. Konopnickiej 5. Rezerwacja online przez Booksy. Ocena 4.9/5 (533 opinii).",
  keywords: [
    "barber Jelenia Góra",
    "barber shop Jelenia Góra",
    "barbershop Jelenia Góra",
    "fryzjer męski Jelenia Góra",
    "strzyżenie męskie Jelenia Góra",
    "broda Jelenia Góra",
    "golenie brzytwą Jelenia Góra",
    "Royal Barbering",
  ],
  authors: [{ name: "Royal Barbering" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "Royal Barbering",
    title: "Royal Barbering — Barber Shop w Jeleniej Górze",
    description:
      "Klasyczny barbering w ciepłym, drewnianym wnętrzu. Strzyżenie, broda i golenie brzytwą. Rezerwacja online przez Booksy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Barbering — wnętrze barber shopu w Jeleniej Górze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Barbering — Barber Shop w Jeleniej Górze",
    description:
      "Klasyczny barbering w Jeleniej Górze. Rezerwacja online przez Booksy.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-[#150d07] antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#150d07] text-amber-50">
        {children}
      </body>
    </html>
  );
}
