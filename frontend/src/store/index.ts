import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rateSlice } from './slices/rateSlice';
// import { convertApi } from './services/convertService';

const rootReducer = combineReducers({
  rateReducer: rateSlice.reducer
});

export const store = () =>
  configureStore({
    reducer: rootReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const rootReducer = combineReducers({
//   [convertApi.reducerPath]: convertApi.reducer
// });

// export const store = () =>
//   configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(convertApi.middleware)
//   });
