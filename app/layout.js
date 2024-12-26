import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/partials/header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>MY movie</title>
        <link rel="icon" href="/images/movie-icon-15142.png" />
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8829449002369751"
     crossorigin="anonymous"></script>


      </head>
      <body className={inter.className}>

        <Header />
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8829449002369751"
            data-ad-slot="7841151981"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        {children}

        <ToastContainer draggable theme="dark" />

      </body>
    </html>
  );
}
