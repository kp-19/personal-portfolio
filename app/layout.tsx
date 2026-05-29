import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Krishna Patil - Portfolio",
  description: "Personal Portfolio of Krishna Patil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} h-full antialiased leading-8 
      overflow-x-hidden scroll-smooth`} 
    >
      <body className="min-h-full flex flex-col font-outfit
      dark:bg-darkTheme dark:text-white">{children}</body>
    </html>
  );
}
