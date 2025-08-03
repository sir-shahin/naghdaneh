import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
