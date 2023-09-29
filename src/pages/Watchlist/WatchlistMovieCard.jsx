import React, { useContext, useState } from "react";

import {
	IoStar,
	IoInformationCircleOutline,
	IoEllipseOutline,
	IoCheckmarkCircleSharp,
} from "react-icons/io5";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

import { getYear } from "date-fns";

import MovieInfoModal from "../../components/MovieInfoModal/MovieInfoModal";

import WatchlistContext from "../../context/WatchlistContext";

const WatchlistMovieCard = ({ movie }) => {
	const { addWatchlist, watchlist, setWatchlist } =
		useContext(WatchlistContext);

	const [toggleMovieInfoModal, setToggleMovieInfoModal] = useState(false);

	const movieYear = isNaN(movie.release_date)
		? getYear(new Date(movie.release_date))
		: "-";

	const moviePoster = movie.poster_path
		? `https://image.tmdb.org/t/p/original${movie.poster_path}`
		: null;

	const isExistInWatchlist = watchlist.some(
		(watchlistMovie) => watchlistMovie.id === movie.id
	);

	const markAsWatched = (id) => {
		setWatchlist((prev) =>
			prev.map((movie) =>
				movie.id === id ? { ...movie, isWatched: !movie.isWatched } : movie
			)
		);
	};

	return (
		<>
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
					<button
						onClick={() => addWatchlist(movie)}
						className="absolute text-3xl cursor-pointer top-2 left-2"
					>
						{isExistInWatchlist ? (
							<BsFillBookmarkCheckFill className="text-green-400" />
						) : (
							<BsBookmark />
						)}
					</button>
					<IoInformationCircleOutline
						onClick={() => setToggleMovieInfoModal(true)}
						className="absolute text-3xl cursor-pointer bottom-2 right-2"
					/>
				</div>

				<div className="absolute flex items-center gap-1 px-2 py-1 text-xs font-semibold text-gray-400 bg-black top-2 right-2 rounded-xl">
					<IoStar className="text-yellow-300" />
					{movie.vote_average.toFixed(1)}
				</div>

				<button
					onClick={() => markAsWatched(movie.id)}
					className={`absolute z-10  pl-1 pr-3 py-1 flex items-center text-white bg-black rounded-full justify-between duration-200 bottom-2 left-2 gap-2 backdrop-filter backdrop-blur-sm  bg-opacity-70 text-xs
                    ${movie.isWatched ? "bg-green-400 " : "bg-black "}
                    `}
				>
					{movie.isWatched ? (
						<>
							<IoCheckmarkCircleSharp className="text-xl" />
							watched
						</>
					) : (
						<>
							<IoEllipseOutline className="text-xl" />
							not watched
						</>
					)}
				</button>
			</li>
			{toggleMovieInfoModal && (
				<MovieInfoModal
					movie={movie}
					setToggleMovieInfoModal={setToggleMovieInfoModal}
				/>
			)}
		</>
	);
};

export default WatchlistMovieCard;
