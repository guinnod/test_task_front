import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'unknown',
    isAuthorized: false,
    isLoading: true
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            console.log("setuser");
            switch (action.type) {
                case 'FETCH_DATA_START':
                    return { ...state, isLoading: true };
                case 'FETCH_DATA_SUCCESS':
                    return { email: action.payload.email, isAuthorized: true, isLoading: false };
                case 'FETCH_DATA_FAILURE':
                    return { ...state, isLoading: false };
                default:
                    return state;
            }
        },
        logout(state) {
            state.email = "unknown",
                state.isAuthorized = false
        }
    }
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;