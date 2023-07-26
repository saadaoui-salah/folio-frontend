import { Nav } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Home - Folio",
  description: "share your portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Nav />
        <main className="min-h-[88vh] mt-24">{children}</main>
      </body>
    </html>
  );
}
