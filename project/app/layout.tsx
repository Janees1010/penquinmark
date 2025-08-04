import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon Central Services - Your Amazon Success Partner",
  description:
    "Professional Amazon seller services including account setup, product optimization, A+ content creation, and brand registry assistance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div>
          <Navigation />
           {children}
        </div>
      </body>
    </html>
  );
}
