import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDataToMMKV } from "_storage";
import Config from "_config";

export const BaseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,
    prepareHeaders: (headers) => {
      const token = getDataToMMKV("functionnality.token", "string");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  tagTypes: [],
  endpoints: () => ({}),
});
