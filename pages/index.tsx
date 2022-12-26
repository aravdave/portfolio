import Head from 'next/head'
import { Inter } from '@next/font/google'
import Footer from '../components/Footer.js'
import Layout, {siteTitle} from '../components/Layout.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Arav Dave's SWE Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={inter.className}>Welcome!</h1>
        <p className="description">
          Hi! This page is under development.
        </p>
      </main>
      <Footer />
    </Layout>
  )
}
