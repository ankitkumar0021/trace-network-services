import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HandleCommonDataSlicePayload {
    blogSearchName?: string;
}

interface commonDataState {
    blogSearchName?: string;
}

const initialState: commonDataState = {
    blogSearchName: '',
};

const commonDataSlice = createSlice({
    name: "commonData",
    initialState,
    reducers: {
        handleBlogSearch: (state, action: PayloadAction<HandleCommonDataSlicePayload>) => {
            state.blogSearchName = action.payload.blogSearchName;
        }
    }
});

export const { handleBlogSearch } = commonDataSlice.actions;
export default commonDataSlice.reducer;
