import *as types from './actionType';
import Axios from "axios"



const fetchDataRequest =(payload)=>{
    return {
        type: types.FETCH_DATA_REQUEST,
        payload
    }
}
const fetchDataSuccess =(payload)=>{
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailure =(payload)=>{
    return {
        type: types.FETCH_DATA_FAILURE,
        payload,
    }
}

// GET DATA FOR SINGLE PRODUCT DETAILS


const getSingleProductRequest =(payload)=>{
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}
const getSingleProductSuccess =(payload)=>{
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}
const getSingleProductFailure =(payload)=>{
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload,
    }
}



const addToCartProductRequest =(payload)=>{
    return {
        type: types.ADD_TO_CART_REQUEST,
        payload
    }
}
const addToCartProductSuccess =(payload)=>{
    return {
        type: types.ADD_TO_CART_SUCCESS,
        payload
    }
}
const addToCartProductFailure =(payload)=>{
    return {
        type: types.ADD_TO_CART_FAILURE,
        payload,
    }
}




const fetchData=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest());
        Axios.get('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
        .then(r=>dispatch(fetchDataSuccess(r.data)))
        .catch(e=>dispatch(fetchDataFailure(e.data)))
    }
   
}

const getSingleProduct = (id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    Axios.get(`/${id}`)
    .then(r=>dispatch(getSingleProductSuccess(r.data)))
   .catch(e=>dispatch(getSingleProductFailure(e.data)))
} 

const addToCartProduct = (product)=>(dispatch)=>{
    dispatch(addToCartProductRequest())
    Axios.post("/cart", product)
    .then(r=>dispatch(addToCartProductSuccess(r.data)))
   .catch(e=>dispatch(addToCartProductFailure(e.data)))
} 



export {fetchData, getSingleProduct, addToCartProduct} 