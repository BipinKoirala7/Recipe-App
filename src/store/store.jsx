import { configureStore } from "@reduxjs/toolkit";
import { recipeListSlice } from "./Slices/recipeListSlice";

const store = configureStore({
    reducer: {
        [recipeListSlice.name] : recipeListSlice.reducer,
    }
})

export { store }
export * from './Slices/recipeListSlice'