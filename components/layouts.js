import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  const mainStyle = {
    "paddingtop": "3%"
  }
  return (
    <>
      <Navbar />
      <main style={mainStyle}>{children}</main>
      <Footer />
    </>
  )
}