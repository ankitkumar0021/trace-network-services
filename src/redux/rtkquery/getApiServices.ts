import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { API_BASE_URL, API_CLIENT_ID, API_CLIENT_SECRET } from '@/utils/config';
import Cookies from "js-cookie";


const mutex = new Mutex();

interface IAPIResponse<T = unknown> {
    http_status_code: number;
    status: boolean;
    data: T;
    timestamp: string;
    message: string;
}

interface IAPIError {
    data: {
        message?: string;
    };
    error?: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: async (headers,) => {
        const token = Cookies.get("auth_token") || null
        const deviceId = Cookies.get("device") || ''
        headers.set('clientid', API_CLIENT_ID);
        headers.set('clientsecret', API_CLIENT_SECRET);
        headers.set('device', deviceId);
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
    },
});


//  with all response data
const baseQueryWithAuth: BaseQueryFn<
    string | FetchArgs,
    IAPIResponse,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    try {
        const result = await baseQuery(args, api, extraOptions);
        const res = result.data as IAPIResponse;
        if (result.error) {
            const errorData = result.error as IAPIError;
            console.log(`API: ${args}, Failed to fetch data`);

            throw new Error(errorData?.data?.message || "Unknown API error");
        }

        return { data: res };
    } catch (error: unknown) {
        let errorResponse: FetchBaseQueryError;
        if (error instanceof Error) {
            errorResponse = {
                status: "CUSTOM_ERROR",
                data: { message: error.message },
                error: error.message,
            };
        } else {
            errorResponse = {
                status: "CUSTOM_ERROR",
                data: { message: "An unexpected error occurred" },
                error: "Unknown error",
            };
        }

        return { error: errorResponse };
    }
};



export const getApiServices = createApi({
    reducerPath: 'getApiServices',
    baseQuery: baseQueryWithAuth,
    endpoints: () => ({}),
});