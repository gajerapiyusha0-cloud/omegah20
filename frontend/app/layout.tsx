import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const body = Outfit({ subsets: ["latin"], variable: "--font-body" });
const display = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Virtual GeoTwinVerse",
  description: "Immersive geospatial knowledge universe, digital twins, and optional haptics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${body.variable} ${display.variable} font-sans antialiased`}>
        <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 holo-panel px-3 py-2 rounded-md" href="#main">
          Skip to experience
        </a>
        {children}
      </body>
    </html>
  );
}
