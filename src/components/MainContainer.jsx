import React from "react";

const MainContainer = ({ children }) => {
	return (
		<main className="bg-gray-900 flex justify-center text-gray-200 font-extralight">
			<div className="max-w-4xl w-full">{children}</div>
		</main>
	);
};

export default MainContainer;
