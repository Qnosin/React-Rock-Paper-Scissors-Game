import { createSlice,configureStore } from '@reduxjs/toolkit'


 const ClickerSlice = createSlice({
    name:'Clicker',
    initialState:{clicker : 0},
    reducers:{
        win(state,action){
            state.clicker = state.clicker + action.payload;
        }
    }
})



export const store = configureStore({
    reducer:{
        clicker: ClickerSlice.reducer,
    }
})

export const clickerAction = ClickerSlice.actions; 
