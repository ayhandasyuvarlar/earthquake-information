
import "./globals.css";
import Navbar from "../components/navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head/>
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  );
}
