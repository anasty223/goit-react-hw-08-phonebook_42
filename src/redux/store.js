import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./contacts/reducers";
import storage from "redux-persist/lib/storage";
import { contactsApi } from "./contacts/contacts-operation";
import logger from "redux-logger";
import authReducer from "./auth/sliceAuth";
import { setupListeners } from "@reduxjs/toolkit/query";

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
  }).concat(logger, contactsApi.middleware);

const persistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, todoReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export { store, persistor };
setupListeners(store.dispatch);
