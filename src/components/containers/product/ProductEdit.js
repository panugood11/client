import React, { Component } from "react";
import Header from "../../Header";
import ProductFrom from "../../ProductItem/ProductFrom";
import Footer from "../../Footer";

class ProductEdit extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="container col-md-5">
                    <ProductFrom />
                </div>
                <Footer />
            </div>
        )
    } 
} 



export default ProductEdit;