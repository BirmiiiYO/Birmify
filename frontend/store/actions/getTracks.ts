import { message } from 'antd';
import { ITrack } from './../../models/Track';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTracks = createAsyncThunk('tracks/getAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<ITrack[]>(`${process.env.NEXT_PUBLIC_API_key}/tracks`);
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Ошибочка');
  }
});

// export const getTrack = (id: string) =>
//   createAsyncThunk('tracks/track', async (_, thunkApi) => {
//     try {
//       const response = await axios.get<ITrack[]>(`${process.env.NEXT_PUBLIC_API_key}/tracks/{id}`);
//       return response.data;
//     } catch (e) {
//       return thunkApi.rejectWithValue('Ошибочка');
//     }
//   });