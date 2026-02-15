import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADENYO Komi David - Architecte | AdokGroup",
  description: "Architecture moderne & durable au service de vos espaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
