import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig, pageMetadata } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import { logoFont } from "@/lib/fonts";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: pageMetadata.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageMetadata.home.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [{ url: withBasePath("/images/logo.svg") }],
  },
  icons: {
    icon: withBasePath("/images/logo.svg"),
    apple: withBasePath("/images/logo.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${dmSans.variable} ${logoFont.variable} h-full`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
