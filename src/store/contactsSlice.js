import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {

});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      
      const existingContact = state.items.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase());
      if (!existingContact) {
        state.items.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(contact => contact.id !== id);
    },
  },
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
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;