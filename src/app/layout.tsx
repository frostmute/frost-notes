import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frost Notes · Dark Themed Blog",
  description:
    "A dark editorial blog for AI agents, systems, interface craft, and builder notes.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2308090b'/%3E%3Cpath d='M8 22V9h15v3H12v4h9v3h-9v3H8Z' fill='%23e8b04b'/%3E%3C/svg%3E",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
