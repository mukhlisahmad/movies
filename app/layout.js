import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/partials/header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/Adesense';
import AdSense from "../components/Adesense";
const inter = Inter({ subsets: ["latin"] });
import AdBanner from "../components/AdBanner";

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>MY movie</title>
        <link rel="icon" href="/images/movie-icon-15142.png" />
        <meta name="google-adsense-account" content="ca-pub-8829449002369751"></meta>
        <AdSense pId="8829449002369751"/>
      </head>
      <body className={inter.className}>
       
        <Header />
        {children}
        <ToastContainer draggable theme="dark" />
      </body>
    </html>
  );
}
