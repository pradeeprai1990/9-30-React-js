const { createSlice } = require("@reduxjs/toolkit");


export let cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[] //State name
    },
    reducers:{
        addToCart:(state )=>{ //State Function | reducers | Actions
            state.cart.push()
        },
        deleteCart:(state)=>{
            state.cart.push()
        },
        changeQty:(state)=>{
            state.cart.push()
        }
    }
})
export let {addToCart,deleteCart,changeQty}=cartSlice.actions
export default cartSlice.reducer