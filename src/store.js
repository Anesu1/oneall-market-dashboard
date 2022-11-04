/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./redux/menuSlice";
import themeSlice from "./redux/themeSlice";

export const store = configureStore({
    reducer:{
        menu:menuSlice,
        theme:themeSlice
    },
})