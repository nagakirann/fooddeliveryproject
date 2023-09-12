import axios from 'axios';

import {
    ADD_TO_CART,
    REMOVE_ITEM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART
} from '../Constants/cartConstant';

export const addItemToCart=(id,quantity)=> async(dispatch,getState)=>{
    try{
        const {data}=await axios.get(`/api/v1/eats/item/${id}`);
        const foodItemData=data.data;
        const image=foodItemData.images&&foodItemData.images.length>0
        ?foodItemData.images[0].url:'';
        dispatch({
            type:ADD_TO_CART,
            payload:{
                foodItem:foodItemData._id,
                name:foodItemData.name,
                price:foodItemData.price,
                image,
                stock:foodItemData.stock,
                quantity
            }
        });
        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
    }catch(error){
        alert.error('Failed to add item to cart.Please try again')
    }
}

export const updateCartQuantity=(foodItemId,quantity)=>async(dispatch)=>{
    dispatch({
        type:UPDATE_CART_QUANTITY,
        payload:{foodItemId,quantity}
    })

};

export const removeItemFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:REMOVE_ITEM_CART,
        payload:id,
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};


export const clearCart=()=>(dispatch)=>{
    dispatch({
        type:CLEAR_CART
    });
    localStorage.removeItem("cartItems");
}