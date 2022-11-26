import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getNetflixOriginalsAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('netflixOriginals/getNetflixOriginals', async () => {
  const response = await axios.get(
    `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
  )
  return response.data.results
})

const netflixOriginalsSlice = createSlice({
  name: 'netflixOriginals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNetflixOriginalsAsync.fulfilled,
      (state, { payload }) => {
        state.data = payload
      }
    )
  },
})

export default netflixOriginalsSlice.reducer
