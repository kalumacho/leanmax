import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeanMax — Scalez par la puissance, pas par la masse",
  description:
    "L'infrastructure IA des cabinets de conseil — industrialisez la delivery, capitalisez le savoir, préservez la valeur sénior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
