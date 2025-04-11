import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devcation'25 - A week-long technical festival by GDG IGDTUW",
  description: "Devcation is a week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
