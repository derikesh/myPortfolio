import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import LenisWrapper from "./components/LenisWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={'class'} defaultTheme="light" enableSystem >
          <LenisWrapper>
            {children}
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
