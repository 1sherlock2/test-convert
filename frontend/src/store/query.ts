import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IVolume } from '../layouts/Rate/Rate.interface';
import { rateSlice } from './slices/rateSlice';

const instanceDB = axios.create({ baseURL: 'http://localhost:5000' });
const isNumber = (num: number) => {
  return typeof num === 'number' && !isNaN(num);
};

export const fetchThunk = {
  rate: createAsyncThunk('rate', async (ratePayload: IVolume, thinkApi) => {
    try {
      const volumeWithNum = {
        ...ratePayload,
        volume: Number(ratePayload.volume)
      };
      if (isNumber(volumeWithNum.volume)) {
        thinkApi.dispatch(rateSlice.actions.setVolume(volumeWithNum));
        const response: AxiosResponse<any> = await instanceDB.post(
          '/api/rate',
          volumeWithNum
        );
        thinkApi.dispatch(rateSlice.actions.uploadVolume(response.data));
      }
    } catch (e) {
      return thinkApi.rejectWithValue(e);
    }
  })
};
