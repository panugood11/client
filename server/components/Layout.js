import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {

    render(){
        const { children, title = "เฮลตี้ คาเฟ่ บล๊อเกอร์" } = this.props;
        return (
            <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="staic/css/style.css" />
    
            </Head>
            <Header />
            {children}
            <Footer />
          </div>
        )
    }
}

export default Layout;