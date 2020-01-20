import React, { Component } from "react";
import {reduxForm, Field} from "redux-form";
import FormField from "../common/FormField";
import {productFormField} from "./formFields";

class ProductForm extends Component {

    renderFields(formFields) {
        return formFields.map(({label, name, type, required}) => {
            return(
                <Field key = {name} label={label} name={name} type={type} required={required} component = {FormField} />
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

function validate(values) {
    const errors = {};
    productFormField.forEach(({name, required}) => {
        if(!values[name] && required){
            errors[name] = 'กรุณากรอกข้อมูลด้วยค่ะ';
        }
    });
    return errors;
}

ProductForm = reduxForm({ validate, form : "productForm"})(ProductForm);

export default ProductForm;