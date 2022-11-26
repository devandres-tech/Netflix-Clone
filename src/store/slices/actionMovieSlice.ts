import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
// import { FETCH_ACTION_MOVIES } from '../actions/index'
import { RootState } from '../index'

// export default function (state = {}, action: any) {
//   switch (action.type) {
//     case FETCH_ACTION_MOVIES:
//       const data = action.payload.data.results
//       return { ...state, data }
//     default:
//       return state
//   }
// }

const initialState = {
  data: [{}],
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
