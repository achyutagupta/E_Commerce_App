import axios from "axios";
import * as actionTypes from '../constants/cartConstants.js';


const URL = '';


export const AddtoCart = (id , quantity) => async (dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type:actionTypes.ADD_TO_CART ,payload:{...data , quantity}});
    } catch (error) {
        dispatch({type:actionTypes.ADD_TO_CART_ERROR ,payload:error.message});
    }
}
export const RemovefromCart = (id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_FROM_CART , payload:id});
}