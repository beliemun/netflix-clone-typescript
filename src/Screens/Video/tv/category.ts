const TVCategory = [
  {
    pathname: "/tv",
    title: "Popular Shows",
    description:
      "The list of the current popular TV shows. This list updates daily.",
  },
  {
    pathname: "/tv/airing-today",
    title: "Airing Today",
    description:
      "The list of TV shows that are airing today. This list purely day based as we do not currently support airing times.",
  },
  {
    pathname: "/tv/on-the-air",
    title: "On The Air",
    description:
      "The list of shows that are currently on the air. This list looks for any TV show that has an episode with an air date in the next 7 days.",
  },
  {
    pathname: "/tv/top-rated",
    title: "Top Rated",
    description:
      "The list of the top rated TV shows. It is sorted by the highest score of all TV shows.",
  },
];

export default TVCategory;
