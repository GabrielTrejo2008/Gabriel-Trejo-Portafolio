
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Trejo | Portafolio",
  description: "Portafolio personal de Gabriel Trejo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="bg-gray-900 px-8 py-4">
            <ul className="flex items-center justify-start gap-8 ml-150">
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#technologies">Technologies</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact me</a>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

