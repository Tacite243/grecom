import Footer from "@/components/footer"
import Header from "@/components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
// import Meta from "@/components/metadata";


export const metadata = {
  title: 'Grecom',
  description: 'Site vitrine de Grecom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // Vérifiez si nous sommes dans le navigateur
  // const isBrowser = typeof window !== 'undefined';

  return (
    <html lang="fr">
      <body className="index-page">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
};