
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "@/components/footer/footer";


export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head/>
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
        <footer>
          {<Footer/>}
        </footer>
      </body>
      
    </html>
  );
}
