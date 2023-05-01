import { apiService } from '.';

const productsApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({type}) => `/product/${type}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productsApi;
