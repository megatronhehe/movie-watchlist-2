import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import PopularMoviesContextProvider from "./context/PopularMoviesContextProvider.jsx";
import SearchMoviesContextProvider from "./context/SearchMoviesContextProvider.jsx";
import WatchlistContextProvider from "./context/WatchlistContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<WatchlistContextProvider>
			<SearchMoviesContextProvider>
				<PopularMoviesContextProvider>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</PopularMoviesContextProvider>
			</SearchMoviesContextProvider>
		</WatchlistContextProvider>
	</BrowserRouter>
);
