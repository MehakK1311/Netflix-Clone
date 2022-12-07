const API_KEY = "3a1eb6681ac244ed6e5230cceff051a1";
const requests ={ 
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetfilxOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovie:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;