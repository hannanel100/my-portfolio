import Image from "next/image";
import "./globals.css";
import CustomNavbar from "./Navbar";
import QueryProvider from "./context/QueryProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
