import {  Geist_Mono ,Space_Grotesk , Karantina  } from "next/font/google";
import "./globals.css";

import { ClashGrotesk } from "./assets/fonts/localFont";


import { ThemeProvider } from "next-themes";
import LenisWrapper from "./components/Lenis/LenisWraper";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
        <ThemeProvider attribute={'class'} defaultTheme="light" enableSystem >
          <LenisWrapper>
            <Navbar/>
            {children}
            <Footer/>
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
