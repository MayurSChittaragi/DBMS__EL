import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers, registerUser } from "../api";

export const registeruser = createAsyncThunk(
  "user/registeruser",
  async (data, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const { user } = await registerUser(data);
      console.log("thunk", user);
      return fulfillWithValue(user);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchusers = createAsyncThunk(
  "user/fetchusers",
  async (props, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const { data } = await fetchUsers();
      // console.log("hello", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [registeruser.fulfilled]: (state, action) => {
      // state.email = action.email;
      // state.password = action.password;
      state.users = action.payload;
    },
    [fetchusers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;
