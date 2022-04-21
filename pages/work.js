import Head from 'next/head'
import Layout from '../components/layouts'
export default function Work() {
  return (
    <>
    <h2>Layout Example (Work)</h2>
  </>
  )
}

Work.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }