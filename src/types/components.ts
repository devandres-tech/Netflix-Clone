import * as H from 'history';
import { MovieDetailType } from './index';

export interface INavbar{
    history: H.History
}

export interface IMainContent{
    selectMovieHandler: (movie: MovieDetailType) => void;
}

export interface IDisplayMovieRow{
    title: string;
    isNetflixMovies?: boolean;
    selectMovieHandler: (movie: MovieDetailType) => void;
    movies: MovieDetailType[];
}

export interface IHeader{
    movie: MovieDetailType
}

export interface IMovieDetails{
    movie: MovieDetailType
}

export interface IBackdrop{
    toggleBackdrop: () => void;
    show: boolean;
}

export interface IModal{
    show: boolean;
    modalClosed: () => void;
    children: JSX.Element;
    backgroundImage: string;
}