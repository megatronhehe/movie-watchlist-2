import React, { useEffect, useState } from "react";

import { options } from "../utils/options";

const MovieInfoModal = ({ movie, setToggleMovieInfoModal }) => {
	const [thisMovie, setThisMovie] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		fetchThisMovie(movie.id);
	}, []);

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
			.catch((err) => setIsError(true))
			.finally(() => setIsLoading(false));
	};

	console.log(thisMovie);

	return (
		<section
			onClick={() => setToggleMovieInfoModal(false)}
			className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-60"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`w-full max-w-xs p-4 border border-gray-700 bg-gray-950 rounded-xl duration-200 ${
					isLoading ? "h-0" : "h-auto"
				}}`}
			>
				{isLoading ? (
					"loading..."
				) : (
					<div className="flex flex-col gap-4">
						<h1>{thisMovie.title}</h1>
						<ul className="flex gap-2">
							{thisMovie.genres.map((genre) => (
								<li>{genre.name}</li>
							))}
						</ul>
						<p>{thisMovie.overview}</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default MovieInfoModal;
