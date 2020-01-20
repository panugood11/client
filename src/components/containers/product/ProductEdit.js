import React, { Component } from "react";
import Header from "../../Header";
import ProductForm from "../../ProductItem/ProductForm";
import Footer from "../../Footer";

class ProductEdit extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="container col-md-5">
                    <ProductForm />
                </div>
                <Footer />
            </div>
        )
    } 
} 



export default ProductEdit;