import { apiService } from ".";
import { IProduct } from "@/constants/products";
import { productTag } from ".";

const productsApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ type }) => `/product/${type}`,
      providesTags: [productTag],
    }),
    createProduct: build.mutation({
      query: ({ data }: { data: IProduct; id?: string }) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [productTag],
    }),
    updateProduct: build.mutation({
      query: ({ data, id }: { data: IProduct; id?: string }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [productTag],
    }),
    deleteProduct: build.mutation({
      query: ({ id }: { id?: string }) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [productTag],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
