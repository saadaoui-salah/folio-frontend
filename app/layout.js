import { Footer, Nav } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Folio",
  description: "share your portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Nav />
        <main className="min-h-[88vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
