import type { Metadata } from "next";

import "./globals.css";

import NextTopLoader from "nextjs-toploader";

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
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR;

  return (
    <html lang="fa" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <NextTopLoader color={primaryColor} showSpinner={false} />
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}
