import dynamic from "next/dynamic";
import React from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/Layout";
import Head from "next/head";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPopup = dynamic(() => import("../components/ContactPopup"));
const DetailsPopup = dynamic(() => import("../components/DetailsPopup"));

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <React.Fragment>
        <Head>
          <title>Avinash - React Developer </title>
          <link
            rel="icon"
            href="/namelogo.png"
            type="image/x-icon"
            sizes="any"
          />
          <meta
            name="description"
            content="Avinash is a software developer from Andhra Pradesh with expertise in web development using  React"
          />
        </Head>
      </React.Fragment>
      <Provider store={store}>
        <div className="overflow-x-container">
          <Layout>
            <Component {...pageProps} />
            <ContactPopup />
            <DetailsPopup />
            <ToastContainer {...toastConfig} />
          </Layout>
        </div>
      </Provider>
    </>
  );
}
