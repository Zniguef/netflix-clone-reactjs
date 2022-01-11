const API_KEY = "d88860f0bf300962f24495bd36ee533b";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&landing=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests