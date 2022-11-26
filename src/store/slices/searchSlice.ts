import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'

const initialState = {
  searchResults: [{}],
  isLoading: true,
}

export const searchItemsAsync = createAsyncThunk<
  any,
  string,
  { state: RootState }
>('search/getSearchItems', async (searchTerm) => {
  const response = await axios.get(
    `/search/multi?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&query=${searchTerm}`
  )
  return response.data.results
})

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchItemsAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.searchResults = payload
    })
    builder.addCase(searchItemsAsync.pending, (state) => {
      state.isLoading = true
    })
  },
})

export default searchSlice.reducer
