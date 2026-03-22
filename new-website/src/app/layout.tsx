import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { ClientObserver } from "@/components/ClientObserver";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALKHAI — Process Mining & Operational Intelligence",
  description:
    "ALKHAI reveals where operations bleed time and money using process mining on your real event data, then delivers a ranked fix plan to increase throughput and efficiency.",
  icons: {
    icon: "/AlkhaiFavicon.png",
    apple: "/AlkhaiFavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body>
        <ClientObserver />
        {children}
      </body>
    </html>
  );
}
