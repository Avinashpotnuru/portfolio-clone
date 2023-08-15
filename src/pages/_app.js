import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/Layout";
import ContactPopup from "../components/ContactPopup";
import DetailsPopup from "../components/DetailsPopup";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Avinash - React Developer </title>
        <link rel="icon" href="/namelogo.png" type="image/x-icon" sizes="any" />
        <meta
          name="description"
          content="Avinash is a software developer from Andhra Pradesh with expertise in web development using  React"
        />
      </Head>
      <Provider store={store}>
        <div className="overflow-x-container">
          <Layout>
            <Component {...pageProps} />
            <ContactPopup />
            <DetailsPopup />
          </Layout>
        </div>
      </Provider>
    </>
  );
}
