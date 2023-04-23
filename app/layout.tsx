import "./globals.css";
import CustomNavbar from "./Navbar";
import QueryProvider from "./context/QueryProvider";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
export const metadata: Metadata = {
  title: "Hannanel's Portfolio",
  description: "This app is a portfolio for Hannanel's work.",
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
        <main className="font-2xl mx-8 mt-24 sm:mx-auto sm:px-8 md:max-w-5xl">
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
