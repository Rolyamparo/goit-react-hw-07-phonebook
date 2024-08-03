import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66acd67ef009b9d5c7339076.mockapi.io/api/contacts/';



// the operations.js is where we dispatch the action generators corresponding for each phase of the async promise
// export const fetchContacts = () => async dispatch => {
//   try {
//     // Load indicator
//     dispatch(fetchingContactsInProgress());
//     // HTTP request
//     const response = await axios.get('/contacts');
//     // Data processing
//     dispatch(fetchingContactsSuccess(response.data));
//   } catch (e) {
//     // Error processing
//     dispatch(fetchingContactsError(e.message));
//   }
// };

// Higher Order Function or Nested Function
// fetchContacts () => async () => ()

// SYNTAX
// createAsyncThunk(actionTypeString, asyncOperationFunction);

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contactData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
