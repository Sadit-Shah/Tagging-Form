import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import '../../global.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}
