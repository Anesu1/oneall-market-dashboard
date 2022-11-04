import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    isMenuOpen:false
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        openMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        linkClicked:(state)=>{
            state.isMenuOpen = false
        }
    }
})


export const {openMenu, linkClicked} = menuSlice.actions

export default menuSlice.reducer
