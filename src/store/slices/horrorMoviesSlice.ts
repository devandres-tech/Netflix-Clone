import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getHorrorMoviesAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('horror/getHorrorMovies', async () => {
  const response = await axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
  )
  return response.data.results
})

const horrorMoviesSlice = createSlice({
  name: 'horrorMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHorrorMoviesAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default horrorMoviesSlice.reducer
