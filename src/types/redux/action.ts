import { AxiosResponse } from "axios";

export type ActionType = "FETCH_TRENDING" | "FETCH_NETFLIX_ORIGINALS" | "FETCH_TOP_RATED" | 'FETCH_ACTION_MOVIES' 
    | 'FETCH_COMEDY_MOVIES' | 'FETCH_HORROR_MOVIES' | 'FETCH_ROMANCE_MOVIES' | 'FETCH_DOCUMENTARIES' | 'FETCH_MOVIE_DETAILS'
    | 'FETCH_MOVIE_DETAILS_SUCCESS' | 'FETCH_MOVIE_DETAILS_FAIL' | 'FETCH_SEARCH_MOVIE' | 'FETCH_SEARCH_MOVIE_FAIL' | 'FETCH_SEARCH_MOVIE_SUCCESS';

export type SearchType = {
    media_type: string;
    id: string;
}

export interface IAction{
    type: ActionType;
    payload?: AxiosResponse<any> | undefined;
}

export interface IfetchMovieDetails{
    (mediaType: string, mediaId: number): void;
}

export interface IfetchSearchMovie{
    (searchTerm: string): void;
}