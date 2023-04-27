import { apiService } from '.';

const productsApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({}) => "/product",
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productsApi;
