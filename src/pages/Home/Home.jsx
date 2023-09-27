import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

const Home = () => {
	const [movies, setMovies] = useState([]);

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: import.meta.env.VITE_AUTHTOKEN,
		},
	};

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			options
		)
			.then((response) => response.json())
			.then((data) => setMovies(data.results))
			.catch((err) => console.error(err));
	}, []);

	const popularMoviesElement = movies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	));

	return (
		<div className="flex flex-col gap-4 p-4 text-sm">
			<section>
				<div className="flex items-center justify-between">
					<h2 className="pl-4 text-xl border-l-4 border-red-400">
						Popular Movies
					</h2>
				</div>
				<ul className="grid grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-4">
					{popularMoviesElement}
				</ul>
			</section>
		</div>
	);
};

export default Home;
