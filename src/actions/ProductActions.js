import axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "./types"

export const productFetch = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products/" + id).then(
            res => {
                dispatch ({ type : PRODUCT_FETCH, playload : res.data});
            }
        )    
    }
}

export const productsFetch = () => {

    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products").then(
            res => {
                dispatch ({ type : PRODUCTS_FETCH, playload : res.data});
            }
        )
    }

   
}

export const productDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/products/" + id).then(res => {
            axios.get(process.env.REACT_APP_API_URL + "/products").then(
                res => {
                    dispatch ({ type : PRODUCTS_FETCH, playload : res.data});
                }
            );
        })
    }
}

export const productCreate = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/products", values).then(
            res => {
                dispatch({type: PRODUCT_CREATE});
            }
        )
    }
}
export const productUpeate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "/products/"+ id, values).then(res => {
            dispatch({type : PRODUCT_UPDATE})
        });
    }
}