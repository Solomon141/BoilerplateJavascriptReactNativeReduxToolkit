import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authSlice from "./Auth/authSlice";
import settingSlice from "./Setting/settingSlice";
import lookupSlice from "./Lookups/lookupSlice";

let persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  
  let combined_Reducers = combineReducers({
    userAuth: authSlice,
    setting: settingSlice,
    lookup: lookupSlice,
  });
  
  const persistedReducer = persistReducer(persistConfig, combined_Reducers);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(),
  });
  
  export default store;