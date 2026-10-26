import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Digital Portfolio | Software Developer",
  description:
    "Explore my professional profile, technical skills, projects, and certificates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}