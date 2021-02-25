const MovieCategory = [
  {
    pathname: "/movie",
    title: "Popular",
    description:
      "The list of the current popular movies. This list updates daily.",
  },
  {
    pathname: "/movie/now-playing",
    title: "Now Playing",
    description:
      "The list of movies in theaters. It looks for all movies that have a release type of 2 or 3 within the specified date range.",
  },
  {
    pathname: "/movie/upcoming",
    title: "Upcoming",
    description:
      "The list of upcoming movies in theaters. It looks for all movies that have a release type of 2 or 3 within the specified date range.",
  },
  {
    pathname: "/movie/top-rated",
    title: "Top Rated",
    description:
      "The top rated movies. It is sorted by the highest score of all movies.",
  },
];

export default MovieCategory;
