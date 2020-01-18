import React, { Component } from "react";
import {reduxForm, Field} from "redux-form";

class ProductFrom extends Component {

    renderFields() {
        const formFields = [
            { name : "productName", type: "text"},
            { name : "unitPrice", type: "number"},
            { name : "thumbnail", type: "text"}
        ];
        return formFields.map(({name, type}) => {
            return(
                <Field name={name} type={type} component = "input" />
            )
        })
    }
    
    render() {
        return(
            <div>
                <from>
                    {this.renderFields()}
                </from>
            </div>
        )
    }
}

ProductFrom = reduxForm({ form : "productFrom"})(ProductFrom);

export default ProductFrom;