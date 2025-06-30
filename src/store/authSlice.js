import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions; // reducers me jo actions hai login, logout inko isse taraha export karte hai

export default authSlice.reducer;