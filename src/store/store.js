import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // other reducers can be added here
  },
});

export default store;