import React, { useContext } from "react";

import WatchlistContext from "../../context/WatchlistContext";

import WatchlistMovieCard from "./WatchlistMovieCard";

import { RiClapperboardFill } from "react-icons/ri";

const Search = () => {
	const { watchlist } = useContext(WatchlistContext);

	const watchlistElement = watchlist.map((movie) => (
		<WatchlistMovieCard key={movie.id} movie={movie} />
	));

	return (
		<div className="flex flex-col gap-4 p-4 text-sm ">
			<section>
				<div className="flex items-center justify-between sm:py-10">
					<h2 className="flex flex-col items-center justify-center w-full gap-2 pl-4 text-xl border-red-400">
						<RiClapperboardFill className="text-4xl" />
						Watchlist Movies
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
