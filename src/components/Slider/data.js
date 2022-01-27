import requests from '../../config/requests'

const data = [
    {
        title: "Netflix originals",
        url: requests.fetchNetflixOriginals
    },
    {
        title: "Trending",
        url: requests.fetchTrending
    },
    {
        title: "Top rated",
        url: requests.fetchTopRated
    },
    {
        title: "Romance",
        url: requests.fetchRomanceMovies
    },
    {
        title: "Comedy",
        url: requests.fetchComedyMovies
    },
    {
        title: "Action",
        url: requests.fetchActionMovies
    },
    {
        title: "Horror",
        url: requests.fetchHorrorMovies
    },
    {
        title: "Documentaries",
        url: requests.fetchDocumentaries
    },
]

export default data