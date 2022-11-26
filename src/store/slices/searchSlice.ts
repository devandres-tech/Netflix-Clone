import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import {
  FETCH_SEARCH_MOVIE,
  FETCH_SEARCH_MOVIE_FAIL,
  FETCH_SEARCH_MOVIE_SUCCESS,
} from '../actions/index'

// interface IInitialState {
//   isLoading: boolean
//   searchResults: []
// }

// const initialState: IInitialState = {
//   isLoading: false,
//   searchResults: [],
// }

// export default function (state = initialState, action: any) {
//   switch (action.type) {
//     case FETCH_SEARCH_MOVIE:
//       return { ...state, isLoading: true }
//     case FETCH_SEARCH_MOVIE_FAIL:
//       return { ...state, isLoading: false }
//     case FETCH_SEARCH_MOVIE_SUCCESS:
//       const searchResults = action.payload.data.results
//       return { ...state, searchResults, isLoading: false }
//     default:
//       return state
//   }
// }

const initialState = {
  searchResults: [{}],
  isLoading: true,
}

export const searchItemsAsync = createAsyncThunk<
  any,
  void,
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
