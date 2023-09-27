import React, { useContext } from "react";

import LoadingCard from "../../components/LoadingCard";
import MovieCard from "../../components/MovieCard";

import PopularMoviesContext from "../../context/PopularMoviesContext";

const PopularMoviesList = () => {
	const { fetchPopularMovies, popularMovies, isLoading, isError } =
		useContext(PopularMoviesContext);

	const popularMoviesElement = popularMovies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	));

	const loadingCardsElement = (
		<>
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
		</>
	);

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
			{popularMoviesElement}
		</ul>
	);
};

export default PopularMoviesList;
