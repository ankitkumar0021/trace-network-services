/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InventorySelectionState {
    selectedInventoryData: any,
    isPDChecked: boolean,
    PDValue: string,
}
const initialState: InventorySelectionState = {
    selectedInventoryData: null,
    isPDChecked: false,
    PDValue: ''
}

const inventorySelectionSlice = createSlice({
    name: "inventorySelection",
    initialState,
    reducers: {
        handleProductInventorySelection: (state, action: PayloadAction<{ selectedInventoryData: any }>) => {
            state.selectedInventoryData = action.payload.selectedInventoryData;
        },
        handleMeasureYourPD: (state, action: PayloadAction<{ isPDChecked: boolean, PDValue: string }>) => {
            state.isPDChecked = action.payload.isPDChecked;
            state.PDValue = action.payload.PDValue;
        }
    }
})

export const { handleProductInventorySelection, handleMeasureYourPD } = inventorySelectionSlice.actions;
export default inventorySelectionSlice.reducer;
