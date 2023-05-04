import { apiService } from ".";

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
      query: ({ data }: { data: ILoginData }) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: build.mutation({
      query: ({ data }: { data: any }) => ({
        url: `/password`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useChangePasswordMutation } = authApi;
