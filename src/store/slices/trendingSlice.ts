import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getTrendingAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('trending/getTrending', async () => {
  const response = await axios.get(
    `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
  )
  return response.data.results
})

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default trendingSlice.reducer
