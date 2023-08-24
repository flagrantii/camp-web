import './globals.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'


export const metadata = {
  title: 'TechCave',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
    <Navbar/>
      <body className='relative'>{children}</body>
    <Footer/>
  </>
  )
}
