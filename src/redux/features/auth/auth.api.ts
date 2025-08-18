import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "user/register",
        method: "POST",
        body: userInfo,
        headers: {
          "Content-Type": "application/json", // 👈 tell backend it's JSON
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
