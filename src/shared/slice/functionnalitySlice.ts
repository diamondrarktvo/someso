import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeDataToMMKV, storeDataToMMKV } from "_storage";

export interface functionnalityStateType {
  menuChoiced: "sms_ana" | "sms_clim" | "";
}

const initialState: functionnalityStateType = {
  menuChoiced: "",
};

const functionnalitySlice = createSlice({
  name: "functionnality",
  initialState,
  reducers: {
    setMenuChoiced: (state, action: PayloadAction<"sms_ana" | "sms_clim">) => {
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

export const functionnalitySelectors = {
  menuChoiced: (state: { functionnality: functionnalityStateType }) =>
    state.functionnality.menuChoiced,
};

export const { setMenuChoiced, resetMenuChoiced } = functionnalitySlice.actions;

export { functionnalitySlice };
