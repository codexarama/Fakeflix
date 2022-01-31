import requests from '../../config/requests';

const data = [
  {
    title: 'Top rated movies',
    url: requests.fetchTopRatedMovie,
  },
  {
    title: 'Trending',
    url: requests.fetchTrending,
    isPoster: 'true',
  },
  {
    title: 'Drama',
    url: requests.fetchDramaMovies,
  },
  {
    title: 'Animation',
    url: requests.fetchAnimationMovies,
  },
  {
    title: 'Sci-Fi',
    url: requests.fetchSciFiMovies,
  },
  {
    title: 'Mystery',
    url: requests.fetchMysteryMovies,
  },
  {
    title: 'Documentaries',
    url: requests.fetchDocumentaries,
  },
  {
    title: 'Top rated tv shows',
    url: requests.fetchTopRatedTvShow,
  },
];

export default data;
