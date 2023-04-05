import { createSlice } from "@reduxjs/toolkit";

// originally initial state was supposed to be null but it kept giving me an error. it would be great to fix this with typescript

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {name: '', isAdmin: false, isDoctor: false, _id: ''}
    },
    reducers: {
        setUser: (state: any, action) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions;