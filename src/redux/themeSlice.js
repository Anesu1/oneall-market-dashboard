import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLight: true
}

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state)=>{
            state.isLight = !state.isLight
        },
        lightTheme:(state)=>{
            state.isLight = true
        },
        darkTheme:(state)=>{
            state.isLight = false
        }
    }
})

export const {changeTheme, lightTheme, darkTheme} = themeSlice.actions

export default themeSlice.reducer