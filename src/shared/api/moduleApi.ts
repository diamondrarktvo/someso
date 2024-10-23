import config from "_config";
import { BaseApi } from "_services";
import { ResponseModuleI, ResponseContentI } from "../types/types";

export const ModuleApi = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllModules: build.query<ResponseModuleI, undefined>({
      query: () => ({
        url: config.MODULES.GET,
        method: "GET",
      }),
      providesTags: ["modules"],
    }),
    getContentOfModule: build.query<ResponseContentI, { id: number }>({
      query: (id) => ({
        url: `${config.MODULES.GET_CONTENT}/${id}`,
        method: "GET",
      }),
      providesTags: (resp, _, arg) => [{ type: "content", id: arg.id }],
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllModulesQuery, useGetContentOfModuleQuery } = ModuleApi;
