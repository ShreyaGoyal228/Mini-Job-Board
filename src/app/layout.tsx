import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Job Board",
  description: "Mini Job Board",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
      {children}
      <Toaster />
      </body>
    </html>
  );
}
