import React from "react";

import NavbarMobile from "./components/NavbarMobile";
import MainContainer from "./components/MainContainer";

import Home from "./pages/Home/Home";

const App = () => {
	return (
		<>
			<NavbarMobile />
			<MainContainer>
				<Home />
			</MainContainer>
		</>
	);
};

export default App;
