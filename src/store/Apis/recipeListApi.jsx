import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const recipeList = createApi({
  reducerPath: "recipesList",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
   return {
     fetchList: builder.query({
       providesTags: (result, error, recipe) => {
         return ['favChanged']
        },
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
                     recipe:recipe
                 },
               };
           }
       }),
     removeRecipe: builder.mutation({
       invalidatesTags: (result, error, array) => {
         return ['favChanged'];
         },
           query: (recipeId) => {
               return {
                 method: "DELETE",
                 url: `/recipiesList/${recipeId}`,
               };
           }
       })
    }
  },
});

export { recipeList };
export const { useFetchListQuery , useAddrecipeMutation , useRemoveRecipeMutation} = recipeList;
