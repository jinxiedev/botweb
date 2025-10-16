import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jinxie Bot - AI WhatsApp Automation",
  description: "Automate your WhatsApp conversations with AI-powered chatbot technology. Enhance customer engagement and boost productivity.",
  keywords: ["WhatsApp bot", "AI chatbot", "automation", "customer service", "business automation"],
  authors: [{ name: "Jinxie Bot" }],
  openGraph: {
    title: "Jinxie Bot - AI WhatsApp Automation",
    description: "Automate your WhatsApp conversations with AI-powered chatbot technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}




