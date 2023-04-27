import { apiSercice } from "./index";

const productsApi = apiSercice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({}) => "/product",
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productsApi;
