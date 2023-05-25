import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const recipeApi = createApi({
    reducerPath: 'recipe',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost/3005',
    }),
    endpoints(builder) {
        return {
            fetchRecipes: builder.query({
                query: () => {
                    return {
                        method: "GET",
                        url: '/recipes'
                    }
                },
            }),
            addRecipe: builder.mutation({
                query: (recipe) => {
                    return {
                        method: 'POST',
                        url: '/recipes',
                        body: {
                            title: recipe.name,
                            image: recipe.image,
                            labels: recipe.dietLabels,
                        }
                    }
                }
            })
        }
    }
})