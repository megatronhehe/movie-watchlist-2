import React, { useEffect, useState } from "react";

import { useDebounce } from "../hooks/useDebounce";

import { options } from "../utils/options";

import SearchMoviesContext from "./SearchMoviesContext";

const SearchMoviesContextProvider = ({ children }) => {
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [searchInput, setSearchInput] = useState("");

	const debouncedSearchInput = useDebounce(searchInput, 500);

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
	};

	const fetchSearchedMovies = () => {
		setIsLoading(true);
		setIsError(false);
		fetch(
			`https://api.themoviedb.org/3/search/movie?query=${debouncedSearchInput}&include_adult=false&language=en-US&page=1`,
			options
		)
			.then((response) => {
				if (!response.ok) {
					setIsError(true);
				} else {
					return response.json();
				}
			})
			.then((data) => setSearchedMovies(data.results))
			.catch((err) => setIsError(true))
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (searchInput.length > 0) {
			fetchSearchedMovies();
		}
	}, [debouncedSearchInput]);

	return (
		<SearchMoviesContext.Provider
			value={{
				searchedMovies,
				searchInput,
				setSearchInput,
				handleSearch,
				isLoading,
				isError,
			}}
		>
			{children}
		</SearchMoviesContext.Provider>
	);
};

export default SearchMoviesContextProvider;
