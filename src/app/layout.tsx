import type { Metadata } from "next";
import "./globals.css";
//-----------------------------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Dao Ngoc Linh",
  description: "Đây là trang cá nhân của Linh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen block relative bg-cushion h-full w-full before:fixed before:inset-0"
      >
        {children}
      </body>
    </html>
  );
}
