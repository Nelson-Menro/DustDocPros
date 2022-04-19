import Head from 'next/head'
// import NavBar from '../components/navbar'
// import Footer from '../components/footer'
import Layout from '../components/layouts'
export default function Home() {
  return (
    <>
      <h2>Layout Example (Index)</h2>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}