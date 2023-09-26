import React from "react";

import { IoStar } from "react-icons/io5";
import {
	BsFillBookmarkPlusFill,
	BsFillBookmarkCheckFill,
	BsFillBookmarkDashFill,
} from "react-icons/bs";

const MovieCard = ({ movie }) => {
	return (
		<li
			key={movie.imdbID}
			className="relative group h-56 sm:h-72 rounded-xl bg-gray-950 flex-shrink-0 overflow-hidden "
		>
			<img
				src={movie.Poster}
				className="absolute object-cover w-full h-full group-hover:scale-110 duration-200"
			/>
			<div className="absolute w-full flex gap-2 justify-center flex-col items-center h-full top-0 left-0 p-2 bg-black bg-opacity-10 duration-200 group-hover:bg-opacity-60 invisible group-hover:visible group-hover:opacity-100 opacity-0">
				<h1 className="text-center font-semibold ">{movie.Title}</h1>
				<p>{movie.Year}</p>
				<BsFillBookmarkPlusFill className="absolute top-2 left-2 text-3xl" />
			</div>

			<div className="absolute top-2 right-2 text-xs font-semibold text-gray-400 px-2 py-1 bg-black rounded-xl flex items-center gap-1">
				<IoStar className="text-yellow-300" />
				{movie.imdbRating}
			</div>
		</li>
	);
};

export default MovieCard;
