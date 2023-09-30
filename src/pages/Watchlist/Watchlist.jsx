import React, { useContext, useState } from "react";
import WatchlistContext from "../../context/WatchlistContext";
import { Link } from "react-router-dom";
import WatchlistMovieCard from "./WatchlistMovieCard";
import Stats from "./Stats";
import { RiClapperboardFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";

const Search = () => {
	const { watchlist } = useContext(WatchlistContext);

	const FILTER_OPTIONS = {
		ALL: "all",
		WATCHED: "watched",
		NOT_WATCHED: "not watched",
	};

	const [filter, setFilter] = useState(FILTER_OPTIONS.ALL);

	const isMoviesExist = watchlist.length > 0;

	const filterWatchlist = () => {
		switch (filter) {
			case FILTER_OPTIONS.WATCHED:
				return watchlist.filter((movie) => movie.isWatched);
			case FILTER_OPTIONS.NOT_WATCHED:
				return watchlist.filter((movie) => !movie.isWatched);
			default:
				return watchlist;
		}
	};

	const filteredWatchlist = filterWatchlist();

	const watchlistElement = filteredWatchlist.map((movie) => (
		<WatchlistMovieCard key={movie.id} movie={movie} />
	));

	return (
		<div className="flex flex-col gap-4 p-4 text-sm">
			<section>
				<div className="flex items-center justify-between sm:py-10">
					<h2 className="flex flex-col items-center justify-center w-full gap-2 pl-4 text-xl border-red-400">
						<RiClapperboardFill className="text-4xl" />
						Watchlist Movies
					</h2>
				</div>
			</section>

			<Stats />

			<section className="flex items-center gap-2 text-sm">
				<IoEye className="text-xl" />
				<ul className="flex gap-1 pl-2 border-l">
					{Object.values(FILTER_OPTIONS).map((option) => (
						<li
							key={option}
							onClick={() => setFilter(option)}
							className={`px-3 py-1 rounded-xl duration-200 cursor-pointer ${
								filter === option ? "bg-blue-400" : "bg-gray-800"
							}`}
						>
							{option}
						</li>
					))}
				</ul>
			</section>

			<section>
				{isMoviesExist ? (
					<ul className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-4">
						{watchlistElement}
					</ul>
				) : (
					<div className="flex flex-col items-center justify-center gap-2 pt-20 text-gray-400">
						<span>No movies in your watchlist yet...</span>
						<span>Search and add movies to your watchlist now!</span>
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
