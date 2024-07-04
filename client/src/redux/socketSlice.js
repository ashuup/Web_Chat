import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketId: null, // Store only the ID or relevant serializable data
  isConnected: false,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socketId = action.payload.id; // Example: Store socket ID
      state.isConnected = true; // Example: Store connection status
    },
    clearSocket: (state) => {
      state.socketId = null;
      state.isConnected = false;
    },
  },
});

export const { setSocket, clearSocket } = socketSlice.actions;

export default socketSlice.reducer;
