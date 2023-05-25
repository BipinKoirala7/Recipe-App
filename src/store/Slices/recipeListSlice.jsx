import { createSlice } from "@reduxjs/toolkit";

const recipeListSlice = createSlice({
    name: "recipeList",
    initialState: {
        isLoading: false,
        data: [],
        error:null
    },
    reducers: {
        addRecipeList(state, action) {
            state.data = state.data.push(action.payload)
        },
        removeRecipeList(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload.id)
        },

    }
    
})

export { recipeListSlice }
export const { addRecipeList , removeRecipeList } = recipeListSlice