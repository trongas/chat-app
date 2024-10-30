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
      if (state.sidebar.open) {
        state.sidebar.type = "CONTACT";
      }
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
  },
});

// Export the reducer
export default slice.reducer;

// Async action for toggling the sidebar
export function toggleSidebar() {
  return (dispatch) => {
    dispatch(slice.actions.toggleSidebar());
  };
}

// Async action for updating the sidebar type
export function updateSidebarType(type) {
  return (dispatch) => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}
