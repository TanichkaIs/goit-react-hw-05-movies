import axios from 'axios';

export async function fetchTrendMovies () {
 const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e5ec7bcb386c8d8c16fa890cf58b6401')  
   
    return response.data;
}

export async function fetchSearchMovies(query) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=e5ec7bcb386c8d8c16fa890cf58b6401&language=en-US&page=1&include_adult=false`)

    return response.data;
}

export async function fetchMovieDetails(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e5ec7bcb386c8d8c16fa890cf58b6401&language=en-US`)

    return response.data;
}

export async function fetchMovieCredits(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e5ec7bcb386c8d8c16fa890cf58b6401&language=en-US`)

    return response.data;
}

export async function fetchMoviesReviews(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e5ec7bcb386c8d8c16fa890cf58b6401&language=en-US&page=1`)

    return response.data;
}