import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeDataToMMKV, storeDataToMMKV } from "src/storage";

export interface functionnalityStateType {
  menuChoiced: string;
}

const initialState: functionnalityStateType = {
  menuChoiced: "",
};

const functionnalitySlice = createSlice({
  name: "functionnality",
  initialState,
  reducers: {
    setMenuChoiced: (state, action: PayloadAction<string>) => {
      state.menuChoiced = action.payload;
      storeDataToMMKV("functionnality.menuChoiced", action.payload);
    },
    resetMenuChoiced: (state) => {
      state.menuChoiced = "";
      removeDataToMMKV("functionnality.menuChoiced");
    },
  },
  extraReducers: (builder) => {},
});

export const selectors = {
  menuChoiced: (state: { functionnality: functionnalityStateType }) =>
    state.functionnality.menuChoiced,
};

export const { setMenuChoiced, resetMenuChoiced } = functionnalitySlice.actions;

export default functionnalitySlice;
