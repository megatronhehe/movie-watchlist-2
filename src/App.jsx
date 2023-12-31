import React from "react";

import NavbarMobile from "./components/NavbarMobile";
import MainContainer from "./components/MainContainer";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Watchlist from "./pages/Watchlist/Watchlist";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const location = useLocation();

	return (
		<>
			<NavbarMobile />
			<MainContainer>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/watchlist" element={<Watchlist />} />
				</Routes>
			</MainContainer>
		</>
	);
};

export default App;
