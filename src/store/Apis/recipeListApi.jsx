import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const recipeList = createApi({
  reducerPath: "recipesList",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
   return {
      fetchList: builder.query({
         query: () => {
            return {
                url: "/recipiesList",
                method: "GET",
        };
      },
      }),
       Addrecipe: builder.mutation({
           query: (recipe) => {
               return {
                 method: "POST",
                 url: "/recipiesList",
                 body: {
                     label: recipe.label,
                     image: recipe.image,
                     infoLink: recipe.shareAs
                 },
               };
           }
       }),
       removeRecipe: builder.mutation({
           query: (recipe) => {
               return {
                   method: 'DELETE',
                   url: `/recipiesList${recipe.id}`,
               }
           }
       })
    }
  },
});

export { recipeList };
export const { useFetchListQuery , useAddrecipeMutation , useRemoveRecipeMutation} = recipeList;
