import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.goit.global/';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addTokenToHeaders = data => {
  axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
};

const clearTokenToHeaders = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', user);
    addTokenToHeaders(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    clearTokenToHeaders();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', user);
    addTokenToHeaders(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/users/signup');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
