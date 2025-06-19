/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBlogsAPIResponse } from "@/types/blogs";
import { getApiServices } from "../rtkquery/getApiServices";


export const getApi = getApiServices.injectEndpoints({
    endpoints: builder => ({
         getAllBlogsData: builder.query<IBlogsAPIResponse, { searchName: string, page: string, limit: string }>({
            query: () => `/get-all-blogs`,
        }),
      
    })
})


export const { useGetAllBlogsDataQuery } = getApi;