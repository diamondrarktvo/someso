import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleT } from "../types/types";

export interface moduleState extends ModuleT {}

const initialState: moduleState = {
  id: "",
  title: "",
  sections: [],
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
  selectModule: (state: { module: moduleState }) => state.module,
  selectSections: (state: { module: moduleState }) => state.module.sections,
};

export const { setModuleData, removeModuleData } = moduleSlice.actions;

export { moduleSlice };
