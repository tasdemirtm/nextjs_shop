import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const cartItemIndex = state.products.find((x) => x._id === action.payload._id);
            if (cartItemIndex) {
                if (cartItemIndex.quantity < 5) {
                    cartItemIndex.quantity++;
                }
            } else {
                state.products.push(action.payload)
            }
        },
        deleteProduct: (state, action) => {
            const cartItemIndex = state.products.find((x) => x._id === action.payload._id);
            if (cartItemIndex) {
                if (cartItemIndex.quantity > 1) {
                    cartItemIndex.quantity--
                }
            }

        },
        reset: (state, action) => {
            const newBag = state.products.filter(x => x._id !== action.payload._id)
            state.products = newBag
        }
    }
})

export const { addProduct, reset, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer
