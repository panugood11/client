import React, { Component } from "react";
import { connect } from "react-redux";
import { productCreate, productUpeate, productFetch} from "../../../actions"
import Header from "../../Header";
import ProductForm from "../../ProductItem/ProductForm";
import Footer from "../../Footer";

class ProductEdit extends Component {

    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetch(this.props.match.params.id);
        }
    }
    render() {
        const { formValues, match, products, productCreate, productUpeate } = this.props;
        
        return(
            <div>
                <Header />
                <div className="container col-md-5">

                {match.path.indexOf("add") > 0 && (
                    <div>
                        
                        <h2>เพิ่ม</h2>
                        {products.saced && (
                            <div className="aler aler-secondary title" role= "alert">
                                {products.msg}
                            </div>
                        )
                        }
                        <ProductForm onProductSubmit = {() => productCreate(formValues)}/>
                    </div>
                )}
                
                {match.path.indexOf("edit") > 0 && (
                    <div>
                        <h2>แก้ไข</h2>
                        {products.saced && (
                            <div className="alert alert-secondary title" role= "alert">
                                {products.msg}
                            </div>
                        )
                        }
                        <ProductForm onProductSubmit ={() => productUpeate(products.id, formValues)}/>
                    </div>
                )}
                    
                </div>
                <Footer />
            </div>
        )
    } 
} 

function mapStateToProps({form, products}){
    return{formValues: form.productForm ? form.productForm.values : null, products};
}

export default connect(mapStateToProps,{ productCreate, productUpeate, productFetch})(ProductEdit);