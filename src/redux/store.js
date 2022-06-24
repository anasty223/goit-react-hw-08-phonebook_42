import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import authReducer from "./auth/sliceAuth";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const persistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};
const persistedReducer = persistReducer(persistConfig, todoReducer);

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export { store, persistor };
