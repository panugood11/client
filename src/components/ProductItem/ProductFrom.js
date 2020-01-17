import React, { Component } from "react";
import {reduxForm} from "redux-form";

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

ProductFrom = reduxForm({ form : "productFrom"})(ProductFrom);

export default ProductFrom;