import "./globals.css";
import CustomNavbar from "./Navbar";
import QueryProvider from "./context/QueryProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
export const metadata: Metadata = {
  title: "Hannanel's Portfolio",
  description: "This app is a portfolio for Hannanel's work.",
  openGraph: {
    title: "Hannanel's Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/divvyla3a/image/upload/v1682338837/portfolio_home_ntqsry.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    url: "https://hannanel.dev",
  },
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` scroll-pt-60 scroll-smooth bg-slate-950 text-slate-50 sm:scroll-pt-20 ${inconsolata.className}`}
    >
      <body>
        <CustomNavbar />
        <main className="font-2xl mx-8 mb-4 mt-24 sm:mx-auto sm:px-8 md:max-w-5xl">
          <QueryProvider>{children}</QueryProvider>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
