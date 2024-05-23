import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SystemState } from "./System.types";

const initialState: SystemState = {
  isCollapsedSidebar: false,
  lang: "uz",
};

export const authSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isCollapsedSidebar = !state.isCollapsedSidebar;
    },
    setLang: (state, action: PayloadAction<SystemState>) => {
      state.lang = action.payload.lang;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, setLang } = authSlice.actions;

export default authSlice.reducer;
