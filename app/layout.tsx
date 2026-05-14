import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Andre's Website",
  description: "Software engineer, music producer, and 3D hobbyist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
