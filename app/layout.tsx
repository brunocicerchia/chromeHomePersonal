import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChromeHome",
  description: "ChromeHome simple for chrome. Improve productivity!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head><meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Pragma" content="public" />
        <meta httpEquiv="Expires" content="31536000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
