import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66507533ec9b4a4a60322716.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (obj, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', obj);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk('contacts/editContact', async (obj, thunkAPI) => {
  try {
    const response = await axios.patch(`/contacts/${obj.id}`, {
      name: obj.name,
      number: obj.number
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
