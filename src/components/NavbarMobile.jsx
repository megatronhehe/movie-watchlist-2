import React from "react";

import { IoHomeOutline, IoSearchOutline, IoGridOutline } from "react-icons/io5";

const NavbarMobile = () => {
	return (
		<nav className="sticky top-0 z-10 bg-gray-950 font-extralight text-gray-200 p-4 text-lg flex justify-center flex-col items-center">
			<h1 className="text-center tracking-wide">
				My<span className="font-semibold">Watchlist</span>
			</h1>
			<ul className="mt-4 flex justify-between max-w-4xl w-full">
				<li className="flex justify-center w-1/3">
					<IoHomeOutline />
				</li>
				<li className="flex justify-center w-1/3">
					<IoSearchOutline />
				</li>
				<li className="flex justify-center w-1/3">
					<IoGridOutline />
				</li>
			</ul>
		</nav>
	);
};

export default NavbarMobile;
