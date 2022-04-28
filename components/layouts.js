import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{paddingTop : "0", overflow : "hidden"}}>{children}</main>
      <Footer />
    </>
  )
}