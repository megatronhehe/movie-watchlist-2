import React from "react";

import { IoSquareOutline } from "react-icons/io5";

const LoadingCard = () => {
	return (
		<li className="flex items-center justify-center flex-shrink-0 h-56 overflow-hidden bg-gray-950 group sm:h-72 rounded-xl animate-pulse">
			<IoSquareOutline className="text-4xl animate-spin" />
		</li>
	);
};

export default LoadingCard;
