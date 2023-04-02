import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json";
import {
  deleteTuitThunk,
  findTuitsThunk,
  createTuitThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "NASA.jpg",
};

const initialState = {
  tuits: [],
  loading: false,
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  disliked : false,
  replies: 0,
  retuits: 0,
  likes: 0,
  dislike: 0
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  initialState,
  extraReducers: {
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push({
        ...templateTuit,
        ...payload
      });
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
  reducers: {
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
  },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
