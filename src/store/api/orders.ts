import { apiService } from "./index";
import { IOrder } from "@/types/order.types";
import { ordersTag } from "./index";

const ordersApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ data }: { data: IOrder }) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [ordersTag],
    }),
    deleteOrder: build.mutation({
      query: ({ id }: { id?: string }) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [ordersTag],
    }),
    updateOrder: build.mutation({
      query: ({ data, id }: { data: any; id?: string }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [ordersTag],
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
      providesTags: [ordersTag],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation
} = ordersApi;
