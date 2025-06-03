import Head from 'next/head'
import Layout from "../components/Layout";
import "../styles/globals.css";


function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Guellord Mbiya" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default App;
