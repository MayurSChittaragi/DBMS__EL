import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, addCart, removeCart } from "../api";
import { fetchPosts } from "../api";

export const fetchposts = createAsyncThunk(
  "post/fetchposts",
  async (props, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const { data } = await fetchPosts();
      // console.log("hello", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const createpost = createAsyncThunk(
  "post/createpost",
  async (newPost, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      // console.log("newpoast", newPost);
      const { data } = await createPost(newPost);
      // console.log("create", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deletepost = createAsyncThunk(
  "post/deletepost",
  async (id, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const post = await deletePost(id);
      return fulfillWithValue(post);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addcart = createAsyncThunk(
  "post/addcart",
  async (id, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const add = await addCart(id);
      // console.log(add, "fnwefgn");
      return fulfillWithValue(add.data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const removecart = createAsyncThunk(
  "post/removecart",
  async (id, thunkAPI) => {
    const { fulfillWithValue } = thunkAPI;
    try {
      const remove = await removeCart(id);
      return fulfillWithValue(remove.data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,

  extraReducers: {
    [fetchposts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },

    [createpost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deletepost.fulfilled]: (state, action) => {
      state.posts.filter((post) => post._id !== action.payload);
    },
    [addcart.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [removecart.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// export const { FETCH_ALL, CREATE } = postSlice.actions;

export default postSlice.reducer;
