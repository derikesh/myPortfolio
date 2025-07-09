import {  Geist_Mono ,Space_Grotesk  } from "next/font/google";
import "./globals.css";

import { ClashGrotesk } from "./assets/fonts/localFont";


import { ThemeProvider } from "next-themes";
import LenisWrapper from "./components/Lenis/LenisWraper";

import Navbar from "./components/Navbar/Navbar";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk-sans",
  subsets: ["latin"],
});

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
        className={`${grotesk.variable} ${geistMono.variable} ${ClashGrotesk.variable} antialiased`}
      >
        <ThemeProvider attribute={'class'} defaultTheme="light" enableSystem >
          <LenisWrapper>
            <Navbar/>
            {children}
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
