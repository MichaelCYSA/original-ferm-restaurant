import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "config_dev";
import nookies from "nookies";
import { authCookieName } from "@/auth/auth";

export const productTag = 'product'

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const cookies = nookies.get();
      const token = cookies[authCookieName];

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [productTag],
  endpoints: (builder) => ({
    healthCheck: builder.query({
      query: () => `health-check`,
    }),
  }),
});

export const { useHealthCheckQuery } = apiService;
