import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
        }
    }
})

export const allUsers = (state) => state.users;
export const userActions = userSlice.actions
export default userSlice.reducer;