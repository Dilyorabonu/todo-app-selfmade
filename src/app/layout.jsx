// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo app",
  description: "Vazifalaringizni tartibga soling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
