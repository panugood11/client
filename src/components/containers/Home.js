import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Monitor from "../monitor/Monitor";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: "" };
  }

  componentDidMount() {
    /* 1 */

    /*this.setState({products: [
        { id: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "images/product/1.jpg" },
        { id: 2, productName: "ไก่ทอด", unitPrice: "120", thumbnail: "images/product/2.jpg" },
        { id: 3, productName: "บิงซู", unitPrice: "120", thumbnail: "images/product/3.jpg" },
        { id: 4, productName: "เฟรนฟราย", unitPrice: "120", thumbnail: "images/product/4.jpg" },
        { id: 5, productName: "เค้ก 3 ชิ้น", unitPrice: "120", thumbnail: "images/product/5.jpg" },
        { id: 6, productName: "กาแฟ เฮลตี้่ฟูด", unitPrice: "120", thumbnail: "images/product/6.jpg" }
      ]})*/
    /* 2 */

    /*fetch("http://localhost:3001/products",{mathod : "GET"})
        .then(res => res.json())
        .then(res => {this.setState({ products : res})})*/
    /* 3 */
    axios.get("http://localhost:3001/products").then(res => {
      {
        this.setState({ products: res.data });
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer company="OLANLAB" email="olan@loanlab.com" />
      </div>
    );
  }
}

export default Home;
