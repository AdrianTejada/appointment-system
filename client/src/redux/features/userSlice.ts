import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

// originally initial state was supposed to be null but it kept giving me an error. it would be great to fix this with typescript

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {name: '', email: ''}
    },
    reducers: {
        setUser: (state, action: PayloadAction<{name: string, email: string}>) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions;