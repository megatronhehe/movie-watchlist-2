import React, { useContext } from "react";
import LoadingCard from "../../components/LoadingCard";
import MovieCard from "../../components/MovieCard";
import SearchMoviesContext from "../../context/SearchMoviesContext";

import { IoSearch, IoClose } from "react-icons/io5";
import { RiClapperboardFill } from "react-icons/ri";

const SearchedMoviesList = () => {
	const {
		searchInput,
		fetchSearchedMovies,
		sortedSearchedMovies,
		isLoading,
		isError,
		isNotFound,
	} = useContext(SearchMoviesContext);

	const searchedMoviesElement = sortedSearchedMovies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	));

	const loadingCardsElement = [...Array(20)].map((e, i) => (
		<LoadingCard key={i} />
	));

	const errorMessageElement = (
		<div className="flex flex-col items-center gap-4 mt-40 ">
			something went wrong, failed to load..
			<button
				onClick={fetchSearchedMovies}
				className="px-4 py-2 text-black bg-blue-300 rounded-xl hover:bg-gray"
			>
				reload
			</button>
		</div>
	);

	// Loading state
	if (isLoading) {
		return (
			<ul className="grid grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-4">
				{loadingCardsElement}
			</ul>
		);
	}

	// Error state
	if (isError) {
		return errorMessageElement;
	}

	// initial scenario
	if (
		!isLoading &&
		!isError &&
		sortedSearchedMovies.length < 1 &&
		searchInput.length < 1
	) {
		return (
			<p className="flex flex-col items-center gap-4 mt-24 text-lg text-blue-300">
				<div className="flex items-end">
					<RiClapperboardFill className=" text-7xl" />
					<IoSearch className="text-4xl " />
				</div>
				<span className="w-48 text-center">
					start by searching a movie by its title
				</span>
			</p>
		);
	}

	//  no movies found
	if (isNotFound) {
		return (
			<p className="flex flex-col items-center gap-4 mt-24 text-lg text-red-300">
				<div className="flex items-end">
					<IoClose className=" text-7xl" />
					<IoSearch className="text-4xl " />
				</div>
				<span className="w-48 text-center">
					No movies by "<span className="font-semibold">{searchInput}</span>"
					was found..
				</span>
			</p>
		);
	}

	// Display movies
	return (
		<ul className="grid grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-4">
			{searchedMoviesElement}
		</ul>
	);
};

export default SearchedMoviesList;
