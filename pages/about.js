import Head from 'next/head'
import NavBar from '../components/navbar'
import Layout from '../components/layouts'
const myComponentStyle = {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "justify-content": "space-evenly"
  };
export default function About() {
  return (
    <>
      <h2>Layout Example (About)</h2>
      <div style={myComponentStyle}>
        <div>
            <h3>Cleaning Services</h3>
        </div>
        <div>
            <h3>Meet the DustDoc Pro team!</h3>
        </div>
      </div>
      </>
  )
}
About.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }