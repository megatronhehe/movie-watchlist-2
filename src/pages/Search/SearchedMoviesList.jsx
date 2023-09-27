import React, { useContext } from "react";

import LoadingCard from "../../components/LoadingCard";
import MovieCard from "../../components/MovieCard";

import SearchMoviesContext from "../../context/SearchMoviesContext";

const SearchedMoviesList = () => {
	const { fetchPopularMovies, searchedMovies, isLoading, isError } =
		useContext(SearchMoviesContext);

	const searchedMoviesElement = searchedMovies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	));

	const loadingCardsElement = [...Array(20)].map((e, i) => (
		<LoadingCard key={i} />
	));

	const errorMessageElement = (
		<div className="flex flex-col items-center gap-4 mt-40 ">
			something went wrong, failed to load..
			<button
				onClick={fetchPopularMovies}
				className="px-4 py-2 text-black bg-blue-300 rounded-xl hover:bg-gray"
			>
				reload
			</button>
		</div>
	);

	if (isLoading) {
		return (
			<ul className="grid grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-4">
				{loadingCardsElement}
			</ul>
		);
	}

	if (isError) {
		return errorMessageElement;
	}

	return (
		<ul className="grid grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-4">
			{searchedMoviesElement}
		</ul>
	);
};

export default SearchedMoviesList;
