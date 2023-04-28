import { apiService } from './index';
import { IOrder } from '@/types/order.types';

const ordersApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
        query: ({ data }: {data: IOrder}) => ({
            url: '/order',
            method: 'POST',
            body: data,
          }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation } = ordersApi;
