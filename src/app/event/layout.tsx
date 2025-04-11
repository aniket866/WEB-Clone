import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Devcation'25",
  description: "Explore the exciting mini-events and competitions at Devcation'25, the technical festival by GDG IGDTUW.",
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
