import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://670baecb7e5a228ec1ce4683.mockapi.io/api/contacts'; // Use your MockAPI endpoint

// Fetch contacts from the MockAPI backend
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// Add a contact to the MockAPI backend
export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
});

// Delete a contact from the MockAPI backend
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
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
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;