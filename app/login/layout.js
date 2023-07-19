import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login - Folio",
  description: "login to folio",
};

export default function RootLayout({ children }) {
  return { children };
}
