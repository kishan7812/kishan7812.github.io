import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-[82vh]">{children}</main>
      <Footer />
    </>
  );
}
