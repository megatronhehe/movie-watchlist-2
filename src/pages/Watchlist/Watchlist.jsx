import React, { useContext, useState } from "react";
import WatchlistContext from "../../context/WatchlistContext";
import { Link } from "react-router-dom";
import WatchlistMovieCard from "./WatchlistMovieCard";
import Stats from "./Stats";
import { RiClapperboardFill } from "react-icons/ri";
import { IoEye, IoCloseCircle } from "react-icons/io5";

import { motion } from "framer-motion";

const Search = () => {
	const { watchlist } = useContext(WatchlistContext);

	const FILTER_OPTIONS = {
		ALL: "all",
		WATCHED: "watched",
		NOT_WATCHED: "not watched",
	};

	const [filter, setFilter] = useState(FILTER_OPTIONS.ALL);
	const [searchQuery, setSearchQuery] = useState("");

	const isMoviesExist = watchlist.length > 0;

	const filterWatchlist = () => {
		return watchlist.filter((movie) => {
			const matchesFilter =
				filter === FILTER_OPTIONS.ALL ||
				(filter === FILTER_OPTIONS.WATCHED && movie.isWatched) ||
				(filter === FILTER_OPTIONS.NOT_WATCHED && !movie.isWatched);

			const matchesSearch = movie.title
				.toLowerCase()
				.includes(searchQuery.toLowerCase());

			return matchesFilter && matchesSearch;
		});
	};

	const filteredWatchlist = filterWatchlist();

	const watchlistElement = filteredWatchlist.map((movie) => (
		<WatchlistMovieCard key={movie.id} movie={movie} />
	));

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col gap-4 p-4 text-sm"
		>
			<section>
				<div className="flex items-center justify-between sm:py-10">
					<h2 className="flex flex-col items-center justify-center w-full gap-2 pl-4 text-xl border-red-400">
						<RiClapperboardFill className="text-4xl" />
						Watchlist Movies
					</h2>
				</div>
			</section>

			<Stats />

			<div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
				<section className="flex items-center justify-center gap-2 text-sm sm:justify-start">
					<IoEye className="text-xl text-blue-300" />
					<ul className="flex gap-1 pl-2 border-l border-gray-600">
						{Object.values(FILTER_OPTIONS).map((option) => (
							<li
								key={option}
								onClick={() => setFilter(option)}
								className={`px-3 py-1 rounded-xl duration-200 cursor-pointer hover:bg-blue-400 ${
									filter === option ? "bg-blue-500" : "bg-gray-800"
								}`}
							>
								{option}
							</li>
						))}
					</ul>
				</section>

				<section className="flex items-center justify-center gap-2 text-sm sm:justify-start">
					<form
						onSubmit={(e) => e.preventDefault()}
						className="flex justify-center"
					>
						<div className="relative flex items-center w-56">
							<input
								name="search"
								placeholder="search by title"
								className="w-full px-4 py-2 text-center duration-200 bg-gray-900 border border-gray-700 outline-none rounded-xl focus:border-blue-300"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<IoCloseCircle
								className="absolute text-xl text-gray-700 duration-200 cursor-pointer hover:text-red-300 right-2"
								onClick={() => setSearchQuery("")}
							/>
						</div>
					</form>
				</section>
			</div>

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
		</motion.div>
	);
};

export default Search;
