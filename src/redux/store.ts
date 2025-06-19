import { getApiServices } from "./rtkquery/getApiServices";
import { postApiServices } from "./rtkquery/postApiServices";
import allModalSlice from "./slices/allModalSlice";
import commonDataSlice from "./slices/commonDataSlice";
import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    allCommonModal: allModalSlice,
    [getApiServices.reducerPath]: getApiServices.reducer,
    [postApiServices.reducerPath]: postApiServices.reducer,
    commonData: commonDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiServices.middleware, postApiServices.middleware),
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
