import React, { useContext, useEffect } from "react";

import WatchlistContext from "../../context/WatchlistContext";

import { IoEyeOutline, IoCheckmark, IoClose } from "react-icons/io5";

const Stats = () => {
	const { watchlist } = useContext(WatchlistContext);

	const moviesCount = watchlist.length;

	const watchedMovies = watchlist.filter(
		(movie) => movie.isWatched === true
	).length;

	const unwatchedMovies = watchlist.filter(
		(movie) => movie.isWatched === false
	).length;

	const calculatePercentage = (part, total) => {
		if (total === 0) {
			return 0;
		}
		return ((part / total) * 100).toFixed();
	};

	const progressPercentage = parseFloat(
		calculatePercentage(watchedMovies, moviesCount)
	);

	return (
		<section className="flex justify-center">
			<ul className="flex w-full gap-2 sm:w-3/5">
				<li className="flex flex-col items-center justify-between w-1/3 h-32 p-2 bg-gray-800 rounded-xl">
					<div className="flex text-3xl text-green-300 ">
						<IoEyeOutline />
						<IoCheckmark className="text-xl" />
					</div>
					<h2>Watched count</h2>
					<h3 className="text-xl font-normal">
						{watchedMovies}
						<span className="text-sm font-extralight">/{moviesCount}</span>
					</h3>
				</li>

				<li className="flex flex-col items-center justify-between w-1/3 h-32 p-2 bg-gray-800 rounded-xl">
					<div className="flex text-3xl text-red-400 ">
						<IoEyeOutline />
						<IoClose className="text-xl" />
					</div>
					<h2 className="text-center">Not watched count</h2>
					<h3 className="text-xl font-normal">
						{unwatchedMovies}
						<span className="text-sm font-extralight">/{moviesCount}</span>
					</h3>
				</li>

				<li className="relative flex flex-col items-center justify-around w-1/3 h-32 overflow-hidden bg-gray-800 rounded-xl">
					<div className="absolute z-10 flex flex-col gap-2">
						<h2>Progress</h2>
						<h3 className="text-2xl font-normal text-center">
							{progressPercentage}%
						</h3>
					</div>
					<div
						style={{ height: `${progressPercentage}%` }}
						className="absolute bottom-0 left-0 w-full h-full duration-200 bg-green-400"
					></div>
				</li>
			</ul>
		</section>
	);
};

export default Stats;
