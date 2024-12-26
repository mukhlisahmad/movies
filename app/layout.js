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
        {children}

        <ToastContainer draggable theme="dark" />

      </body>
    </html>
  );
}
