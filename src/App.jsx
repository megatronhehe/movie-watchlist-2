import React from "react";

import NavbarMobile from "./components/NavbarMobile";
import MainContainer from "./components/MainContainer";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<NavbarMobile />
			<MainContainer>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</MainContainer>
		</>
	);
};

export default App;
