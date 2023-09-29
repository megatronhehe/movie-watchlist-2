import React, { useEffect, useState, useContext } from "react";

import { options } from "../../utils/options";

import { format } from "date-fns";

import WatchlistContext from "../../context/WatchlistContext";

import { IoTime, IoStar, IoSquareOutline } from "react-icons/io5";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

const MovieInfo = ({ movie }) => {
	const { addWatchlist, watchlist } = useContext(WatchlistContext);

	const [thisMovie, setThisMovie] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchThisMovie = (id) => {
		setIsLoading(true);
		setIsError(false);
		fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
			.then((res) => {
				if (!res.ok) {
					setIsError(true);
				} else {
					return res.json();
				}
			})
			.then((data) => setThisMovie(data))
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		fetchThisMovie(movie.id);
	}, []);

	const isExistInWatchlist = watchlist.some(
		(watchlistMovie) => watchlistMovie.id === movie.id
	);

	const isDateExist = movie.release_date.length > 0;

	if (isLoading) {
		return (
			<p className="flex justify-center text-4xl ">
				<IoSquareOutline className="animate-spin" />
			</p>
		);
	}

	if (isError) {
		return "something went wrong";
	}

	return (
		<div className="relative flex flex-col gap-6 font-extralight">
			<div className="flex flex-col items-center gap-2 pb-2 border-b border-gray-700">
				<h1 className="w-2/3 text-xl font-normal text-center">
					{thisMovie.title}
				</h1>
				<p className="text-xs">
					{isDateExist
						? format(new Date(thisMovie.release_date), "yyyy")
						: "date unknown"}{" "}
					- <span>{thisMovie.status}</span>
				</p>
			</div>

			<ul className="flex gap-2 pb-2 overflow-auto text-xs">
				{thisMovie.genres.map((genre) => (
					<li
						key={genre.id}
						className="flex-shrink-0 px-2 py-1 bg-gray-800 rounded-xl"
					>
						{genre.name}
					</li>
				))}
			</ul>

			<ul className="flex gap-2 -mt-2">
				{isDateExist ? (
					<li className="flex flex-col items-center justify-between w-1/3 h-24 gap-1 p-2 text-xs bg-gray-900 rounded-xl">
						<span>{format(new Date(thisMovie.release_date), "MMMM")}</span>
						<span className="text-xl font-semibold">
							{format(new Date(thisMovie.release_date), "dd")}
						</span>
						<span>{format(new Date(thisMovie.release_date), "yyyy")}</span>
					</li>
				) : (
					<li className="flex flex-col items-center justify-between w-1/3 h-24 gap-1 p-2 text-xs bg-gray-900 rounded-xl">
						<span className="text-2xl">?</span>
						<span>date</span>
						<span>unknown</span>
					</li>
				)}

				<li className="flex flex-col items-center justify-between w-1/3 h-24 gap-1 p-2 text-xs bg-gray-900 rounded-xl">
					<span>
						<IoTime className="text-lg text-blue-300" />
					</span>
					<span className="text-xl font-semibold">{thisMovie.runtime}</span>
					<span>minutes</span>
				</li>

				<li className="flex flex-col items-center justify-between w-1/3 h-24 gap-1 p-2 text-xs bg-gray-900 rounded-xl">
					<span>
						<IoStar className="text-lg text-yellow-400" />
					</span>
					<span className="text-xl font-semibold">
						{thisMovie.vote_average.toFixed(1)}
					</span>
					<span>ratings</span>
				</li>
			</ul>

			<p className="text-sm text-justify">{thisMovie.overview}</p>

			<button
				onClick={() => addWatchlist(movie)}
				className="absolute top-0 left-0 text-3xl cursor-pointer"
			>
				{isExistInWatchlist ? (
					<BsFillBookmarkCheckFill className="text-green-400" />
				) : (
					<BsBookmark />
				)}
			</button>
		</div>
	);
};

export default MovieInfo;
