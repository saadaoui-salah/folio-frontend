import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Folio",
  description: "share your portofolio",
};

export default function RootLayout({ children }) {
  return { children };
}
