import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getAllData = createAsyncThunk('movies/getAllData',async () => {
    const response = await axios.get("http://localhost:5050/movies")
    return response.data
  },
)
const initialState = {
  movies: [],
}

export const MoviesSlices = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.movies=[...action.payload]
    })
}})

export const { incrementByAmount } = MoviesSlices.actions

export default MoviesSlices.reducer