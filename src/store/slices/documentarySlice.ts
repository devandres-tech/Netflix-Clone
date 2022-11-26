import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getDocumentariesAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('documentary/getDocumentaries', async () => {
  const response = await axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
  )
  return response.data.results
})

const documentarySlice = createSlice({
  name: 'actionMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDocumentariesAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default documentarySlice.reducer
