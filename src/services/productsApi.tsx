import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories, Products } from "../models/product.model";

const token: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodWJoYW1wYXdhcjI0Mjc2N0BnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vU2h1YmgtUGF3YXIwMDciLCJpYXQiOjE2NjQwMDk4MDIsImV4cCI6MTY2NDQ0MTgwMn0.JLVUPVcrmIJpxEwwznyiRujmBJ-CIljqVCQjQ1NCiqo";

export interface IData {
  message: string;
  products: Products[];
}

export interface IDataId {
    message: string;
    products: Products;
  }

  export interface ICateData {
    message: string;
    categories: Categories[];
  }

  export interface ICateDataId {
    message: string;
    categories: Categories;
  }

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://upayments-studycase-api.herokuapp.com/api/",
    }),
    tagTypes: ["product","category"],
    endpoints: (builder) => ({
      getProducts: builder.query<IData, void>({
        query: () => ({
          url: "/products",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        providesTags: ["product"],
      }),
  
      getProductsById: builder.query({
        query: (id) => ({
          url: `/products/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      }),
  
      createProducts: builder.mutation<void, Products>({
        query: (data) => ({
          url: "/products",
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        invalidatesTags: ["product","category"],
      }),
      
      //Category 
      getCategory: builder.query<ICateData, void>({
        query: () => ({
          url: "/categories",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        providesTags: ["category"],
      }),
  
      getCategoriesById: builder.query<ICateDataId, string | undefined>({
        query: (id) => ({
          url: `/categories/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      }),
      //
    }),
  });
  
  export const {
    useGetProductsQuery,
    useGetProductsByIdQuery,
    useCreateProductsMutation,
    useGetCategoryQuery,
    useGetCategoriesByIdQuery
  } = productsApi;