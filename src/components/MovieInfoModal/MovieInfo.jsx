import React, { useEffect, useState, useContext } from "react";

import { options } from "../../utils/options";

import { format } from "date-fns";

import WatchlistContext from "../../context/WatchlistContext";

import {
	IoTime,
	IoStar,
	IoSquareOutline,
	IoCheckmarkCircle,
} from "react-icons/io5";
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

	const isReleased = thisMovie.status === "Released";

	const isExistInWatchlist = watchlist.some(
		(watchlistMovie) => watchlistMovie.id === movie.id
	);

	const isDateExist = movie.release_date.length > 0;

	const moviePoster = movie.poster_path
		? `https://image.tmdb.org/t/p/original${movie.poster_path}`
		: null;

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
			<div className="flex flex-col items-center gap-2 pb-6 border-b border-gray-700">
				<div className="relative flex justify-center">
					<img
						src={moviePoster}
						alt={`movie poster of ${thisMovie.title}`}
						className="rounded-lg"
					/>
					<div className="absolute flex flex-col items-center p-4 bg-black -bottom-12 backdrop-filter bg-opacity-40 rounded-xl backdrop-blur-sm">
						<h1 className="text-xl font-normal text-center">
							{thisMovie.title}
						</h1>
						<p className="flex gap-2 text-xs">
							{isDateExist
								? format(new Date(thisMovie.release_date), "yyyy")
								: "date unknown"}{" "}
							-{" "}
							<span
								className={`flex items-center gap-1 ${
									isReleased ? "font-bold text-green-400" : "text-white"
								}`}
							>
								{thisMovie.status}
								{isReleased && <IoCheckmarkCircle className="text-lg" />}
							</span>
						</p>
					</div>
				</div>
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

			<a
				href={thisMovie.homepage}
				target="_blank"
				className="py-1 text-center bg-blue-400 rounded-xl"
			>
				Movie home page
			</a>

			<button
				onClick={() => addWatchlist(movie)}
				className="absolute flex items-center justify-center w-10 h-10 p-2 text-3xl bg-black rounded-full cursor-pointer left-2 top-2 bg-opacity-60"
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
