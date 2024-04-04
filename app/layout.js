import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from '@/components/BootstrapClient.jsx';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mazzini Moto",
  description: "Vendita e Assistenza Motocicli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='spazio'>
        {children}
        </div>
        <Footer />
        <BootstrapClient />
      </body>  
    </html>
  );
}
