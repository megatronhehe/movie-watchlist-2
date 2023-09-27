import React, { useContext } from "react";

import { IoStar, IoInformationCircleOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { getYear } from "date-fns";

import WatchlistContext from "../context/WatchlistContext";

const MovieCard = ({ movie }) => {
	const { addWatchlist } = useContext(WatchlistContext);

	const movieYear = isNaN(movie.release_date)
		? getYear(new Date(movie.release_date))
		: "-";

	const moviePoster = movie.poster_path
		? `https://image.tmdb.org/t/p/original${movie.poster_path}`
		: null;

	return (
		<li
			key={movie.id}
			className="relative flex-shrink-0 h-56 overflow-hidden group sm:h-72 rounded-xl bg-gray-950 "
		>
			<img
				src={moviePoster}
				className="absolute object-cover w-full h-full duration-200 group-hover:scale-110"
			/>
			<div className="absolute top-0 left-0 flex flex-col items-center justify-center invisible w-full h-full gap-2 p-2 duration-200 bg-black opacity-0 bg-opacity-10 group-hover:bg-opacity-80 group-hover:visible group-hover:opacity-100">
				<h1 className="font-semibold text-center ">{movie.original_title}</h1>
				<p>{movieYear}</p>
				<BsBookmark
					onClick={() => addWatchlist(movie)}
					className="absolute text-3xl cursor-pointer top-2 left-2"
				/>
				<IoInformationCircleOutline className="absolute text-3xl cursor-pointer bottom-2 right-2" />
			</div>

			<div className="absolute flex items-center gap-1 px-2 py-1 text-xs font-semibold text-gray-400 bg-black top-2 right-2 rounded-xl">
				<IoStar className="text-yellow-300" />
				{movie.vote_average}
			</div>
		</li>
	);
};

export default MovieCard;
