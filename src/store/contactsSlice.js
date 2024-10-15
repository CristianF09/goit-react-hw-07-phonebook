import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://61b2c06fcf4d340017187517.mockapi.io/api/v1/contacts'; // Change this to your actual API endpoint

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;