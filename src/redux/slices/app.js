import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSideBarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
  },
});

// Export actions
export const { toggleSidebar, updateSideBarType } = slice.actions;

// Export reducer
export default slice.reducer;
