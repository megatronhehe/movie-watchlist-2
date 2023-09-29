import React, { useEffect, useState } from "react";

import { useDebounce } from "../hooks/useDebounce";

import { options } from "../utils/options";

import { parseISO, compareAsc, compareDesc } from "date-fns";

import SearchMoviesContext from "./SearchMoviesContext";

const SearchMoviesContextProvider = ({ children }) => {
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [isDateSortedAsc, setIsDateSortedAsc] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isNotFound, setIsNotFound] = useState(false);
	const [searchInput, setSearchInput] = useState("");

	const debouncedSearchInput = useDebounce(searchInput, 500);

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
	};

	const fetchSearchedMovies = () => {
		setSearchedMovies([]);
		setIsLoading(true);
		setIsError(false);
		setIsNotFound(false);
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
			.then((data) => {
				setSearchedMovies(data.results);
				if (data.results.length < 1) {
					setIsNotFound(true);
				}
			})
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

	useEffect(() => {
		setIsNotFound(false);
	}, [searchInput]);

	const sortObjectsByDate = (objectArray) => {
		objectArray.sort((a, b) => {
			const dateA = parseISO(a.release_date);
			const dateB = parseISO(b.release_date);
			if (isDateSortedAsc) {
				return compareAsc(dateA, dateB);
			}
			return compareDesc(dateA, dateB);
		});

		return objectArray;
	};

	const sortedSearchedMovies = sortObjectsByDate(searchedMovies);

	return (
		<SearchMoviesContext.Provider
			value={{
				fetchSearchedMovies,
				sortedSearchedMovies,
				searchedMovies,
				searchInput,
				setSearchInput,
				handleSearch,
				isLoading,
				isError,
				isNotFound,
				isDateSortedAsc,
				setIsDateSortedAsc,
			}}
		>
			{children}
		</SearchMoviesContext.Provider>
	);
};

export default SearchMoviesContextProvider;
