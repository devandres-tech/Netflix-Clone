import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getTopRatedAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('topRated/getTopRated', async () => {
  const response = await axios.get(
    `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`
  )
  return response.data.results
})

const trendingSlice = createSlice({
  name: 'topRated',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopRatedAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default trendingSlice.reducer
