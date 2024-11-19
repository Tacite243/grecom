import Footer from "@/components/footer"
import Header from "@/components/header"
// import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Meta from "@/components/metadata";


export const metadata = {
  title: 'Grecom',
  description: 'Site vitrine de Grecom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 600,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false
  //   });
  // }, []);
  
  return (
    <html lang="fr">
      {/* <Meta /> */}
      <body className="index-page">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
};