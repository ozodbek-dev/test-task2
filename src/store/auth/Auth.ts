import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from './Auth.types'
import { storage } from 'services'

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  data: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<AuthState>) => {
      storage.set("token", action.payload.token || "")
      
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.data = action.payload.data;
    },
    logOut: (state) => {
      storage.remove("token");
      
      state.isLoggedIn = false;
      state.data = null;
      state.token = null;
    },
    getMe: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.data = action.payload.data;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getMe, logIn, logOut } = authSlice.actions

export default authSlice.reducer