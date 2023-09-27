import React, { useState } from "react";

import WatchlistContext from "./WatchlistContext";

const WatchlistContextProvider = ({ children }) => {
	const [watchlist, setWatchlist] = useState([]);

	const addWatchlist = (newMovie) => {
		const isMovieAlreadyExist = watchlist.some(
			(movie) => movie.id === newMovie.id
		);
		setWatchlist((prev) =>
			!isMovieAlreadyExist
				? [...prev, newMovie]
				: prev.filter((movie) => movie.id !== newMovie.id)
		);
	};

	return (
		<WatchlistContext.Provider
			value={{ setWatchlist, watchlist, addWatchlist }}
		>
			{children}
		</WatchlistContext.Provider>
	);
};

export default WatchlistContextProvider;
