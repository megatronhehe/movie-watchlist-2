import React, { useContext } from "react";

import WatchlistContext from "../../context/WatchlistContext";

import { Link } from "react-router-dom";

import WatchlistMovieCard from "./WatchlistMovieCard";

import { RiClapperboardFill } from "react-icons/ri";
import Stats from "./Stats";

const Search = () => {
	const { watchlist } = useContext(WatchlistContext);

	const watchlistElement = watchlist.map((movie) => (
		<WatchlistMovieCard key={movie.id} movie={movie} />
	));

	const isMoviesExist = watchlist.length > 0;

	return (
		<div className="flex flex-col gap-4 p-4 text-sm ">
			<section>
				<div className="flex items-center justify-between sm:pt-10">
					<h2 className="flex flex-col items-center justify-center w-full gap-2 pl-4 text-xl border-red-400">
						<RiClapperboardFill className="text-4xl" />
						Watchlist Movies
					</h2>
				</div>
			</section>

			<Stats />

			<section>
				{isMoviesExist ? (
					<ul className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-4">
						{watchlistElement}
					</ul>
				) : (
					<div className="flex flex-col items-center justify-center gap-2 pt-20 text-gray-400">
						<span>No movies in your watchlist yet...</span>
						<span>search and add movies to your watchlist now!</span>
						<Link
							to="/search"
							className="px-3 py-1 mt-4 text-white bg-blue-400 rounded-xl"
						>
							Search now!
						</Link>
					</div>
				)}
			</section>
		</div>
	);
};

export default Search;
