import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, logOutThunk, refreshThunk, registerThunk } from "./operations";

const initialState = {
    user: {
        email: '',
        name: '',
    },
    token: '',
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(logOutThunk.fulfilled, state => {
            state.user = initialState.user;
            state.isLoggedIn = false;
            state.token = '';
        })
        .addCase(refreshThunk.fulfilled, (state, {payload})=> {
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.isLoggedIn = true;
        })
        .addCase(registerThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logInThunk.fulfilled, (state, {payload})=> {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
    }
})


export const authReducer = authSlice.reducer;