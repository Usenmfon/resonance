import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resonance-biographies.example"),
  title: {
    default: "Resonance | Modern Music Celebrity Biographies",
    template: "%s | Resonance"
  },
  description:
    "A premium editorial biography platform for music celebrities, exploring life stories, discographies, awards, galleries, and cultural legacy.",
  keywords: [
    "music celebrity biography",
    "artist profiles",
    "discography",
    "music awards",
    "artist legacy"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('resonance-theme');
        var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (error) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-grain-radial">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
