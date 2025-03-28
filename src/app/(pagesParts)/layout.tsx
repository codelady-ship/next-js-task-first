//pagespart layoutu
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
