import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  refetchOnMountOrArgChange: 4,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),

  endpoints: builder => ({
    // ** AUTH => MOVE 👇
    userLogin: builder.mutation({
      query: body => ({
        url: "/auth/local",
        method: "POST",
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({ id, token }) => ({
        url: `/products/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery, // ** use with {}
  useUpdateProductMutation, // ** use with []
  useDeleteProductMutation, // ** use with []
  useUserLoginMutation, // ** use with []
} = productsApi;
