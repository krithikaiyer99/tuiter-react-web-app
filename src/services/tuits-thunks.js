import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-services";

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.jpg",
}

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "disliked":false,
  "dislike":0,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

export const findTuitsThunk = createAsyncThunk(
  "tuits/findTuits",
  async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
  "tuits/deleteTuit",
  async (tuitId) => {
    await service.deleteTuit(tuitId);
    return tuitId;
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuits/updateTuit",
  async (tuit) => {
    await service.updateTuit(tuit);
    return tuit;
  }
);

export const createTuitThunk = createAsyncThunk(
  'tuits/createTuit',
  async (tuit) => {
      return service.createTuit(
          {
              ...templateTuit,
              ...tuit
          }
      )
  }
)
