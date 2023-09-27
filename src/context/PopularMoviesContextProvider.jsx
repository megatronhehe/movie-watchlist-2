import React, { useState, useEffect } from "react";

import { options } from "../utils/options";

import PopularMoviesContext from "./PopularMoviesContext";

const PopularMoviesContextProvider = ({ children }) => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchPopularMovies = () => {
		setIsLoading(true);
		setIsError(false);
		fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			options
		)
			.then((response) => {
				if (!response.ok) {
					setIsError(true);
				} else {
					return response.json();
				}
			})
			.then((data) => setPopularMovies(data.results))
			.catch((err) => setIsError(true))
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		fetchPopularMovies();
	}, []);

	return (
		<PopularMoviesContext.Provider
			value={{ fetchPopularMovies, popularMovies, isLoading, isError }}
		>
			{children}
		</PopularMoviesContext.Provider>
	);
};

export default PopularMoviesContextProvider;
