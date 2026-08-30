import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fragment_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { ClarityInit } from "@/components/ui/ClarityInit";

const generalSans = localFont({
  variable: "--font-inter",
  src: [
    { path: "../../public/fonts/general-sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/general-sans/GeneralSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/general-sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jui Ling ｜ Product Designer",
  description: "Strategic design that drives growth, not just looks good.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${fragmentMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <LanguageProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
        <Analytics />
        <ClarityInit />
      </body>
    </html>
  );
}
