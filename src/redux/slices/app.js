import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  sideBar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
  isLoggedIn: true,
  tab: 0, // [0, 1, 2, 3]
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
  users: [], // all users of app who are not friends and not requested yet
  all_users: [],
  friends: [], // all friends
  friendRequests: [], // all friend requests
  chat_type: null,
  room_id: null,
  call_logs: [],
};

const slice = createSlice({
  name: "app",
  initialState,
  
  reducers: {

    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
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

export const SelectConversation = ({ room_id }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
};
