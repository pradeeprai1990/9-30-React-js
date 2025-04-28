const { createSlice } = require("@reduxjs/toolkit");


export let counterSlice=createSlice({
    name:"couter",
    initialState:{
        count:10 //State name
    },
    reducers:{
        couterIncrement:(state )=>{ //State Function | reducers | Actions
            state.count+=1
        },
        couterDecrement:(state)=>{
            state.count-=1
        }
    }
})
export let {couterIncrement,couterDecrement}=counterSlice.actions
export default counterSlice.reducer