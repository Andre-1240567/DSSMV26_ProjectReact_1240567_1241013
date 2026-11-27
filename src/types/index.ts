/**
 * Domain Models & Type Definitions for CineTrack
 */

export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  genres?: string[];
  genreIds?: number[];
  runtime?: number;
  trailerKey?: string;
}

export interface Cinema {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distanceMeters?: number;
  rating?: number;
}

export interface MovieReview {
  id: string;
  movieId: number;
  author: string;
  content: string;
  rating?: number;
  createdAt: string;
}

export type RootTabParamList = {
  MoviesTab: undefined;
  CinemasTab: undefined;
  WatchlistTab: undefined;
  SettingsTab: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  MovieDetails: { movieId: number; title: string };
  CinemaDetails: { cinemaId: string; name: string };
};
