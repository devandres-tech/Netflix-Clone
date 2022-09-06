import rootReducer from "../../store/reducers";
import { SearchResultMovie, SearchResultSeries, SearchResultPerson, MovieDetailType } from '../data';

export type RootReducerState = ReturnType<typeof rootReducer>;

export interface DefaultReducerState{
    data?: SearchResultMovie;
}

export interface MovieDetailsReducerState{
    isLoading: boolean;
    movieDetails: MovieDetailType | undefined;
}

export interface SearchMovieReducerState{
    isLoading: boolean;
    searchResults: SearchResultMovie[] | SearchResultSeries[] | SearchResultPerson[] | undefined;
}