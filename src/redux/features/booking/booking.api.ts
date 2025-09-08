import { baseApi } from "@/redux/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/booking",
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["BOOKING"],
    }),
    getBooking: builder.mutation({
      query: (id) => ({
        url: `/booking/:id`,
        method: "GET",
      }),
      invalidatesTags: ["BOOKING"],
    }),
  }),
});

export const { useCreateBookingMutation, useGetBookingMutation } = bookingApi;
