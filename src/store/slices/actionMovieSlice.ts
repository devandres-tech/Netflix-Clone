import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getActionMoviesAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('action/getActionMovies', async () => {
  const response = await axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
  )
  return response.data.results
})

const actionMovieSlice = createSlice({
  name: 'actionMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActionMoviesAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default actionMovieSlice.reducer
