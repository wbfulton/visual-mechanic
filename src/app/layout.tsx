import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "100 Series Parts Visualizer",
  description: "Three.js visualizer of all LC 100 parts",
  applicationName: "lc100-parts",
  authors: { name: "Will Fulton" },
  keywords: [
    "Toyota",
    "LC",
    "Land Cruiser",
    "100 Series",
    "Parts",
    "Diagrams",
    "3D",
    "Car",
    "Truck",
  ],
  icons: "/icon.ico",
};

// diagram/
// part/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
