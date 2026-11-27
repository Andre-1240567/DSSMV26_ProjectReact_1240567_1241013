/**
 * Application-wide configuration and API endpoints for CineTrack
 */

export const Config = {
  appName: 'CineTrack',
  version: '1.0.0',
  academicInfo: {
    institution: 'ISEP — Instituto Superior de Engenharia do Porto',
    course: 'LETI — Licenciatura em Engenharia de Telecomunicações e Informática',
    uc: 'Desenvolvimento de Software e Sistemas Móveis (DSSMV)',
    academicYear: '2026/27',
    classGroup: '2DA',
    authors: [
      { name: 'André Pereira Moreira', studentNumber: '1240567' },
      { name: 'Afonso Martins Sobreiro', studentNumber: '1241013' },
    ],
  },
  api: {
    tmdbBaseUrl: 'https://api.themoviedb.org/3',
    tmdbImageBaseUrl: 'https://image.tmdb.org/t/p/w500',
    tmdbBackdropBaseUrl: 'https://image.tmdb.org/t/p/original',
    foursquareBaseUrl: 'https://api.foursquare.com/v3/places',
  },
  storageKeys: {
    favorites: '@cinetrack_favorites',
    watchlist: '@cinetrack_watchlist',
    theme: '@cinetrack_theme',
    searchHistory: '@cinetrack_search_history',
  },
};
