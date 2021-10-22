import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authSlice from "./slices/auth";
import { combineReducers } from "redux";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage: storage,
  },
  rootReducer
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof rootReducer>;

export default store;
