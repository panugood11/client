import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="staic/css/style.css" />

        </Head>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Index;
