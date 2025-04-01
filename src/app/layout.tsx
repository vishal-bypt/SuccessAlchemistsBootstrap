import type { Metadata } from "next";
import { Geist, Geist_Mono ,Jost } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "@/components/Navbar";
import Footer from "@/components/Footer";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TawkChat from '../components/TawkChat';
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Success Alchemists",
  description: "At Success Alchemists, we believe that our success is tied to yours. If you're a CEO seeking to deliver accelerated growth, augmented value, and a simplified business model, our experienced Scaling Up Coaches are here to help. Scaling up requires a significant shift in management thinking, and while the path may seem simple, it often involves a steep learning curve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        style={{ background: "#F5F5F5" }}
        className={`${geistSans.variable} ${geistMono.variable} p-3`}
      >
        <NavbarMenu />
        <ToastContainer />
        {children}
        <TawkChat />
        <Footer />
      </body>
    </html>
  );
}
