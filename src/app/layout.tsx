import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bist League 5.0",
  description: "Your favourite League is Back",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/landingpage/Logo.svg" sizes="any" />
      <body className={manrope.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
