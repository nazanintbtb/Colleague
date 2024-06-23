import {
  PRODUCT_LIST_REQUST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
import axios from "axios";

export const fetchProducts = () => async (dispatch) =>{
  try{
    dispatch({type:PRODUCT_LIST_REQUST})
    const { data } = await axios.get( "http://127.0.0.1:8000/api/v1/products/")

    dispatch({
      type:PRODUCT_LIST_SUCCESS,
      payload:data
    })

  }catch(error){
    dispatch({
      type:PRODUCT_LIST_FAIL,
      payload:error.response && error.response.data.message
          ?error.response.data.message
          :error.message
    })

  }

}