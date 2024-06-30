import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../redux/slices/MoviesSlices'

export const store = configureStore({
  reducer: {
    movies:moviesReducer
  },
})