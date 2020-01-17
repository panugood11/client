import React, { Component } from "react";
import { reduxFrom } from "redux-form";

class ProductFrom extends Component {
    
    render() {
        return(
            <div>
                <from>

                </from>
            </div>
        )
    }
}
ProductFrom = reduxFrom({ from : "productFrom"})(ProductFrom);
export default ProductFrom;