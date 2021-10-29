import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      //initial States
      user: {
        username: "",
        loggedIn: false,
      },
    },
    reducers: {
      //reducers
      login: (state, action) => {
        state.username = action.payload;
        state.loggedIn = true;
      },
      logout: (state) => {
        state.username = "";
        state.loggedIn = false;
      },
    },
  },
});

//generate action creators

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
