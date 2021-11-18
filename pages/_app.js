import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //esta es la pagina renderizandose en si, si queremos
  //agregar algo a todas todas las paginas, lo hacemos acá

  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
