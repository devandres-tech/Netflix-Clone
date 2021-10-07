import axios from '../../axios-movies'

export const FETCH_HEADER_MOVIE = 'FETCH_HEADER_MOVIE'
export const FETCH_TRENDING = 'FETCH_TRENDING'
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS'
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED'
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES'
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES'
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES'
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES'
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES'

export const fetchHeaderMovie = () => {
  const movieId = 63351
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `tv/${movieId}?api_key=${process.env.API_KEY}`
      )

      dispatch({ type: FETCH_HEADER_MOVIE, payload: request })
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const fetchNetflixOriginals = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
      )

      dispatch({ type: FETCH_NETFLIX_ORIGINALS, payload: request })
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const fetchTrending = () => {
  const request = axios.get(
    `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
  )

  return {
    type: FETCH_TRENDING,
    payload: request,
  }
}

export const fetchTopRated = () => {
  const request = axios.get(
    `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`
  )

  return {
    type: FETCH_TOP_RATED,
    payload: request,
  }
}

export const fetchActionMovies = () => {
  const request = axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
  )

  return {
    type: FETCH_ACTION_MOVIES,
    payload: request,
  }
}

export const fetchComedyMovies = () => {
  const request = axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
  )

  return {
    type: FETCH_COMEDY_MOVIES,
    payload: request,
  }
}

export const fetchHorrorMovies = () => {
  const request = axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
  )

  return {
    type: FETCH_HORROR_MOVIES,
    payload: request,
  }
}

export const fetchRomanceMovies = () => {
  const request = axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`
  )

  return {
    type: FETCH_ROMANCE_MOVIES,
    payload: request,
  }
}

export const fetchDocumentaries = () => {
  const request = axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
  )

  return {
    type: FETCH_DOCUMENTARIES,
    payload: request,
  }
}
