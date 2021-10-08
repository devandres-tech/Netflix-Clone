import axios from '../../axios-movies'

export const FETCH_TRENDING = 'FETCH_TRENDING'
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS'
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED'
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES'
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES'
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES'
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES'
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES'
// movie details
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS'
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS'
export const FETCH_MOVIE_DETAILS_FAIL = 'FETCH_MOVIE_DETAILS_FAIL'
// search
export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE'
export const FETCH_SEARCH_MOVIE_FAIL = 'FETCH_SEARCH_MOVIE_FAIL'
export const FETCH_SEARCH_MOVIE_SUCCESS = 'FETCH_SEARCH_MOVIE_SUCCESS'

const media_type = {
  tv: 'tv',
  movie: 'movie',
}

export const fetchMovieDetails = (mediaType, mediaId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_MOVIE_DETAILS })
      let urlPath
      if (mediaType === media_type.movie)
        urlPath = `/movie/${mediaId}?api_key=${process.env.API_KEY}`
      if (mediaType === media_type.tv)
        urlPath = `/tv/${mediaId}?api_key=${process.env.API_KEY}`

      const request = await axios.get(urlPath)
      dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: request })
    } catch (error) {
      console.log('error', error)
      dispatch({ type: FETCH_MOVIE_DETAILS_FAIL })
    }
  }
}

export const fetchSearchMovie = (searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_SEARCH_MOVIE })
      const request = await axios.get(
        `/search/multi?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&query=${searchTerm}`
      )
      dispatch({ type: FETCH_SEARCH_MOVIE_SUCCESS, payload: request })
    } catch (error) {
      dispatch({ type: FETCH_SEARCH_MOVIE_FAIL })
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
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
      )
      dispatch({ type: FETCH_TRENDING, payload: request })
    } catch (error) {}
  }
}

export const fetchTopRated = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`
      )
      dispatch({ type: FETCH_TOP_RATED, payload: request })
    } catch (error) {}
  }
}

export const fetchActionMovies = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
      )

      dispatch({ type: FETCH_ACTION_MOVIES, payload: request })
    } catch (error) {}
  }
}

export const fetchComedyMovies = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
      )

      dispatch({ type: FETCH_COMEDY_MOVIES, payload: request })
    } catch (error) {}
  }
}

export const fetchHorrorMovies = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
      )
      dispatch({ type: FETCH_HORROR_MOVIES, payload: request })
    } catch (error) {}
  }
}

export const fetchRomanceMovies = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`
      )
      dispatch({ type: FETCH_ROMANCE_MOVIES, payload: request })
    } catch (error) {}
  }
}

export const fetchDocumentaries = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
      )
      dispatch({ type: FETCH_DOCUMENTARIES, payload: request })
    } catch (error) {}
  }
}
