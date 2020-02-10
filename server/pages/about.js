import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head"

const About = () =>{
    return(
        <div>
            <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="staic/css/style.css" />

        </Head>
            <Header/>
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4" >
                    เราคือร้านอาหาร ที่เน้นอาหารอร่อยเท่านั้นจริงๆ ไม่ให้
                </p>
                <h4 className = "text-success">จาก เฮลตี้ คาเฟ่</h4>
            </div>

            <Footer compay="Olanlab" email="olan@olanlab.com"/>
        </div>
    )
}
export default About;