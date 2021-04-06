import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        "api_key": "0c52c9e42b90b88a82a710442227c2e3",
        "language": "en-US"
    }
});

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    topRated: () => api.get("movie/top_rated"),
    popular: () => api.get("movie/popular"),
    latest: () => api.get("/movie/latest"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    latest: () => api.get("/tv/latest"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const trendApi = {
    weekAll: () => api.get("/trending/all/week"),
    weekTv: () => api.get("/trending/tv/week"),
    weekMovie: () => api.get("/trending/movie/week"),
    todayAll: () => api.get("/trending/all/day")
}
