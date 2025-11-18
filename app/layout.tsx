import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import localFont from "next/font/local";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Open-Source Leg",
  description: "An end-to-end open-source platform that makes prosthetics research more accessible",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const raveo = localFont({
  src: '../public/fonts/Raveo.woff2',
  variable: '--font-raveo',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`scroll-smooth ${geist.variable} ${raveo.variable}`}>
      <body
        className={`${geist.className} antialiased pt-24`}
      >
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WPE7SZWC6R" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WPE7SZWC6R');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
