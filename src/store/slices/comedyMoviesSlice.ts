import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getComedyMoviesAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('comedy/getComedyMovies', async () => {
  const response = await axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
  )
  return response.data.results
})

const comedyMovieSlice = createSlice({
  name: 'comedyMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComedyMoviesAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default comedyMovieSlice.reducer
