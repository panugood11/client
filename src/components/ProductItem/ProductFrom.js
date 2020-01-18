import React, { Component } from "react";
import {reduxForm, Field} from "redux-form";
import FormField from "../common/FromField";
import {productFormField} from "./formFields"

class ProductFrom extends Component {

    renderFields(formFields) {
        return formFields.map(({label, name, type, required}) => {
            return(
                <Field label={label} name={name} type={type} required={required} component = {FormField} />
            )
        })
    }
    
    render() {
        return(
            <div>
                <from>
                    {this.renderFields(productFormField)}
                    <button className="btn btn-block btn-info title">
                        บันทึก
                    </button>
                </from>
            </div>
        )
    }
}

ProductFrom = reduxForm({ form : "productFrom"})(ProductFrom);

export default ProductFrom;