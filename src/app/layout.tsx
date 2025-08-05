import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: "NAGHDANEH | نقدانه",
  description: "نقدانه: همه چیز زیر ذره‌بین شما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}
