import React from "react";

import MovieInfo from "./MovieInfo";

const MovieInfoModal = ({ movie, setToggleMovieInfoModal }) => {
	return (
		<section
			onClick={() => setToggleMovieInfoModal(false)}
			className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-60"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-xs p-4 duration-200 border border-gray-700 bg-gray-950 rounded-xl"
			>
				<MovieInfo movie={movie} />
			</div>
		</section>
	);
};

export default MovieInfoModal;
