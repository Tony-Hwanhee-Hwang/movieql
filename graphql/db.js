import axios from "axios";

const API_URL = "https://yts-proxy.now.sh/";

const LIST_URL = `${API_URL}list_movies.json?`;
const DETAIL_URL = `${API_URL}movie_details.json?`;
const SUGGESTIONS_URL = `${API_URL}movie_suggestions.json?`;

export const getMovies = async (limit, rating) => {
	let req_url = LIST_URL;

	if (limit > 0) {
		req_url += `limit=${limit}`;
	}
	if (rating > 0) {
		req_url += `&minimum_rating=${rating}`;
	}
	//console.log(req_url);
	const {
		data: {
			data: { movies },
		},
	} = await axios.get(req_url);
	return movies;
};

export const getMovieById = async (id) => {
	const req_url = `${DETAIL_URL}movie_id=${id}`;
	const {
		data: {
			data: { movie },
		},
	} = await axios.get(req_url);
	//console.log(req_url);
	return movie;
};

export const getSuggestions = async (id) => {
	const req_url = `${SUGGESTIONS_URL}movie_id=${id}`;
	const {
		data: {
			data: { movies },
		},
	} = await axios.get(req_url);
	//console.log(req_url);
	return movies;
};
