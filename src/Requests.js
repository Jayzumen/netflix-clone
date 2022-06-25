const ApiKey = process.env.REACT_APP_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=2`,
  requestCrime: `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=crime&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`,
};

export default requests;
