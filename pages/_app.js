import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/footer'
import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SaITForm</title>
      </Head>
      <main>
        <Nav />
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
      <Toaster />
    </>
  )
}

export default MyApp
