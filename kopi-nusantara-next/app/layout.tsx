import "./globals.css";
import "./styles/constants.css";
import "./styles/style.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/menu.css";
import "./styles/career.css";

import Script from "next/script";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";

export const metadata = {
  title: "Kopi Nusantara",
  description: "Website Kopi Nusantara dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />

        <Script 
          src="https://unpkg.com/feather-icons@4.29.2/dist/feather.min.js" 
          strategy="lazyOnload" 
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}