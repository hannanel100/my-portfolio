import Image from "next/image";
import "./globals.css";
import CustomNavbar from "./Navbar";
import QueryProvider from "./context/QueryProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hannanel's Portfolio",
  description: "This app is a portfolio for Hannanel's work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-20 bg-slate-950 text-slate-50">
      <body>
        <CustomNavbar />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
