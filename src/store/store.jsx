import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { recipeList } from "./Apis/recipeListApi";

const store = configureStore({
    reducer: {
        [recipeList.reducerPath]: recipeList.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(recipeList.middleware)
    }
})

setupListeners(store.dispatch)

export { store }
export * from './Apis/recipeListApi'