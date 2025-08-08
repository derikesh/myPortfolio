import {  Geist_Mono ,Space_Grotesk , Karantina  } from "next/font/google";
import "./globals.css";

import { ClashGrotesk } from "./assets/fonts/localFont";


import { ThemeProvider } from "next-themes";
import LenisWrapper from "./components/Lenis/LenisWraper";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";

import Preloader from "./components/Common/Preloader";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Rikesh - Portfolio',
    template: '%s | Rikesh'
  },
  description: 'Full Stack Developer & Designer passionate about creating exceptional digital experiences',
  keywords: ['developer', 'portfolio', 'web development', 'design', 'react', 'next.js'],
  authors: [{ name: 'Rikesh Sherpa' }],
  creator: 'Rikesh Sherpa',
}

const grotesk = Space_Grotesk({
  variable: "--font-grotesk-sans",
  subsets: ["latin"],
});

const karantin = Karantina({
  variable:"--font-karantina-sans",
  subsets:['latin'],
  weight:['300','400','700']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${karantin.variable} ${grotesk.variable} ${geistMono.variable} ${ClashGrotesk.variable} antialiased`}
      >
        <Preloader />

        <ThemeProvider attribute={'class'} defaultTheme="light" enableSystem >
          <LenisWrapper>
            <Navbar/>
            {children}
            <Footer/>
            <ScrollToTop/>
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
