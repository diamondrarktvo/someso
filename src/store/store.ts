import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { BaseApi } from "_services";
import { functionnalitySlice, moduleSlice } from "_shared";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [BaseApi.reducerPath]: BaseApi.reducer,
    [functionnalitySlice.name]: functionnalitySlice.reducer,
    [moduleSlice.name]: moduleSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactiver le middleware de vérification de la sérialisation
    }).concat(BaseApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
/*store.subscribe(() => {
  console.log("State ato amin'ny storee : ");
  console.log(store.getState());
});*/

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
