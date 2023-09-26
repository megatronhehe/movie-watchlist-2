import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=8217fb31&y=2023&s=movie`)
			.then((res) => res.json())
			.then((data) => {
				const moviePromises = data.Search.map((movie) =>
					fetch(
						`http://www.omdbapi.com/?apikey=8217fb31&i=${movie.imdbID}`
					).then((res) => res.json())
				);
				Promise.all(moviePromises)
					.then((moviesData) => {
						setMovies(moviesData);
					})
					.catch((error) => {
						console.error("Error fetching movie details:", error);
					});
			});
	}, []);

	const popularMoviesElement = movies.map((movie) => (
		<MovieCard key={movie.imdbID} movie={movie} />
	));

	return (
		<div className="p-4 flex flex-col gap-4 text-sm">
			<section>
				<div className="flex items-center justify-between">
					<h2 className="border-l-4 border-red-400 pl-4 text-xl">
						Random Movies
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
