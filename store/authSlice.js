import { createSlice } from "@reduxjs/toolkit";

const DUMMY_USERS = [
  {
    user: {
      userId: "1",
      name: "Ahmed Kamran",
      email: "ahmed@gmail.com",
      profilePicture: "",
    },
  },
  {
    user: {
      userId: "2",
      name: "Mujtaba Shafiq",
      email: "mujtaba@gmail.com",
      profilePicture: "",
    },
  },
];

const userInitialState = {
  user: {
    userId: "",
    name: "",
    email: "",
    profilePicture: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: userInitialState,
  reducers: {
    loginUser(state, action) {
      state.user = { ...DUMMY_USERS[0].user };
    },

    logoutUser(state, action) {
      state.user = { ...userInitialState.user };
    },
  },
});

export default authSlice;
