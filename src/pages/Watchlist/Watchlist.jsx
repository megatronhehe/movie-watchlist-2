import React, { useContext } from "react";

import WatchlistContext from "../../context/WatchlistContext";

import MovieCard from "../../components/MovieCard";

const Search = () => {
	const { watchlist } = useContext(WatchlistContext);

	const watchlistElement = watchlist.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	));

	return (
		<div className="flex flex-col gap-4 p-4 text-sm">
			<section>
				<div className="flex items-center justify-between">
					<h2 className="flex flex-col items-center justify-center w-full gap-2 pl-4 text-xl border-red-400">
						My Watchlist
					</h2>
				</div>
			</section>

			<section>
				<ul className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-4">
					{watchlistElement}
				</ul>
			</section>
		</div>
	);
};

export default Search;
