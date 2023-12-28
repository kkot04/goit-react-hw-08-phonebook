import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6585c767022766bcb8c95914.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
    'fetchContacts',
    async(_, thunkAPI) => {
        try {
            const {data} = await axios.get('contacts')
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContactsThunk = createAsyncThunk(
    'deleteContacts', 
    async (id, thunkAPI) => {
        try {
            const {data} = await axios.delete(`contacts/${id}`)
            return data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContactThunk = createAsyncThunk(
    'addContacts',
    async ({name, phone}, thunkAPI) => {
        try {
            const {data} = await axios.post('contacts', {name, phone})
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)