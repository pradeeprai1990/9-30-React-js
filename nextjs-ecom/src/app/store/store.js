import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../reducers/counterSlice'
import cartSlice  from '../reducers/cartSlice'


export let store=configureStore({
    reducer:{
        counter:counterSlice,
        cart:cartSlice
    }
})