import { apiService } from '.';

export interface ILoginData {
   email: string;
   password: string;
}
export interface ILoginResponse {
    token: string;
}

const authApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
        query: ({ data }: {data: ILoginData}) => ({
            url: '/login',
            method: 'POST',
            body: data,
          }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
