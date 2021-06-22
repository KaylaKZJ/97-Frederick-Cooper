import type { AppProps } from 'next/app'

// Components
import Layout from "../components/UI/Layout/Layout"

// Styles & Icons
import '../styles/global.scss';
// import "../assets/icons/style.css";
import "typeface-roboto";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
