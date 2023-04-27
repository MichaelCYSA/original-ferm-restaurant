import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config_dev';

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
  endpoints: (builder) => ({
    healthCheck: builder.query({
      query: (name) => `health-check`,
    }),
  }),
});

export const { useHealthCheckQuery } = apiService;
