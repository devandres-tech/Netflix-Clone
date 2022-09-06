export interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path?: any;
}

export interface Genre {
    id: number;
    name: string;
}

export interface LastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface Network {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieType {
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface MovieSummaryType extends MovieType {
    genre_ids: number[];
    original_title: string;
    release_date: string;
    title: string;
    video: boolean;
}

export interface MovieDetailType extends MovieType {
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air?: any;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_name: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
}

export interface SearchResultSeries {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: "tv";
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface SearchResultPerson {
    adult: boolean;
    gender: number;
    id: number;
    known_for: MovieSummaryType[];
    known_for_department: string;
    media_type: "person";
    name: string;
    popularity: number;
    profile_path: string;
}

export interface SearchResultMovie extends MovieSummaryType {
    adult: boolean;
    gender: number;
    id: number;
    media_type: "movie";
    name: string;
    popularity: number;
    profile_path: string;
}