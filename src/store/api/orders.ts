import { apiService } from "./index";
import { IOrder } from "@/types/order.types";

const ordersApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ data }: { data: IOrder }) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),
    getOrders: build.query({
      query: ({ skip = 0, take = 10, status, fromDate, toDate }: any) => ({
        url: "/order",
        method: "GET",
        params: {
          skip,
          take,
          status,
          fromDate,
          toDate,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi;
