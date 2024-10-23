import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModuleI } from "../types/types";

export interface moduleState extends Omit<ResponseModuleI, "message"> {}

const initialState: moduleState = {
  languages: "",
  modules: {
    mg: [],
    fr: [],
    en: [],
  },
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    setModuleData: (state, action: PayloadAction<moduleState>) => {
      return { ...state, ...action.payload };
    },
    removeModuleData: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});

export const moduleSelectors = {
  selectModule: (state: { module: moduleState }) => state,
  selectSections: (state: { module: moduleState }) => state,
};

export const { setModuleData, removeModuleData } = moduleSlice.actions;

export { moduleSlice };
