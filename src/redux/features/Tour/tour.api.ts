import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTour: builder.mutation({
      query: (tourData) => ({
        url: "/tour/create",
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: ["TOUR"],
    }),
    addTourType: builder.mutation({
      query: (tourTypeName) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourTypeName,
      }),
      invalidatesTags: ["TOUR"],
    }),
    removeTourType: builder.mutation({
      query: (tourTypeId) => ({
        url: `/tour/tour-types/${tourTypeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TOUR"],
    }),

    getTourTypes: builder.query({
      query: (params) => ({
        url: `/tour/tour-types`,
        method: "GET",
        params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (res) => res.data,
    }),
    getAllTours: builder.query({
      query: () => ({
        url: "/tour",
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (res) => res.data,
    }),
    getSingleTours: builder.query({
      query: (slug) => ({
        url: `/tour/${slug}`,
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useAddTourTypeMutation,
  useRemoveTourTypeMutation,
  useGetTourTypesQuery,
  useAddTourMutation,
  useGetAllToursQuery,
  useGetSingleToursQuery,
} = tourApi;
