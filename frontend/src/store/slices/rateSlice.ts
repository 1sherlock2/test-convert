import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IRateInitial,
  IRateUpdate,
  IVolume
} from '../../layouts/Rate/Rate.interface';
import { rateUtils } from '../../layouts/Rate/utils';
import { fetchThunk } from '../query';

const initialState: IRateInitial = {
  data: rateUtils,
  isLoading: false,
  error: ''
};

export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    setVolume(state, action: PayloadAction<IVolume<number>>) {
      state.data[action.payload.volumeIdentify].volume = action.payload.volume;
    },
    clearVolumes(state) {
      Object.keys(state.data).forEach((rateKey) => {
        state.data[rateKey].volume = '';
      });
    },
    uploadVolume(state, action: PayloadAction<IRateUpdate>) {
      console.log('top', action.payload);
      Object.keys(action.payload).forEach((item: string) => {
        state.data[item].volume = action.payload[item];
      });
    }
  },
  extraReducers: {
    [fetchThunk.rate.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      // state.data = action.payload;
    },
    [fetchThunk.rate.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchThunk.rate.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});
