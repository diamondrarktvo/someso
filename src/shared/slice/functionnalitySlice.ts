import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storage, storeDataToMMKV } from "_storage";
import { ModuleSomesoTypes } from "_utils";

export interface functionnalityStateType {
  isUserAlreadyShowOnboardingScreen: boolean;
  menuChoiced: ModuleSomesoTypes | "";
}

const initialState: functionnalityStateType = {
  isUserAlreadyShowOnboardingScreen: false,
  menuChoiced: "",
};

const functionnalitySlice = createSlice({
  name: "functionnality",
  initialState,
  reducers: {
    setUserShowOnboardingScreen: (state, action: PayloadAction<boolean>) => {
      state.isUserAlreadyShowOnboardingScreen = action.payload;
      if (
        !storage.contains("functionnality.isUserAlreadyShowOnboardingScreen") ||
        !action.payload
      ) {
        storeDataToMMKV(
          "functionnality.isUserAlreadyShowOnboardingScreen",
          action.payload,
        );
      }
    },
    setMenuChoiced: (state, action: PayloadAction<"sms_ana" | "sms_clim">) => {
      state.menuChoiced = action.payload;
    },
    resetMenuChoiced: (state) => {
      state.menuChoiced = "";
    },
  },
  extraReducers: (builder) => {},
});

export const functionnalitySelectors = {
  menuChoiced: (state: { functionnality: functionnalityStateType }) =>
    state.functionnality.menuChoiced,
  isUserAlreadyShowOnboardingScreen: (state: {
    functionnality: functionnalityStateType;
  }) => state.functionnality.isUserAlreadyShowOnboardingScreen,
};

export const { setMenuChoiced, resetMenuChoiced, setUserShowOnboardingScreen } =
  functionnalitySlice.actions;

export { functionnalitySlice };
