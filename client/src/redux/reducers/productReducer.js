import * as actionTypes from '../constants/productConstants.js';


export const getProductReducer = (state ={products:[]} ,action) =>{
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            console.log('i ran');
            return {products:action.payload};
        case actionTypes.GET_PRODUCTS_FAILED:
            console.log('i did not');
            return {error:action.payload};
        default:
            return state;
    }
}

export const getProductDetailsReducer = (state = {product:{}} , action)=>{
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {loading:true}
        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {loading:false , product:action.payload}    
        case actionTypes.GET_PRODUCTS_DETAILS_FAILED:
            return {loading:false , error:action.payload}
        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {product:{}}
        default:
            return state;
    }
}