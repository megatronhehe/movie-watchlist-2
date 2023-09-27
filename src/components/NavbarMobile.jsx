import React from "react";

import { IoHomeOutline, IoSearchOutline, IoGridOutline } from "react-icons/io5";

const NavbarMobile = () => {
	return (
		<nav className="sticky top-0 z-10 flex flex-col items-center justify-center p-4 text-lg text-gray-200 bg-gray-950 font-extralight bg-opacity-60 backdrop-filter backdrop-blur-md sm:flex">
			<h1 className="tracking-wide text-center">
				My<span className="font-semibold">Watchlist</span>
			</h1>
			<ul className="flex justify-between w-full max-w-4xl mt-4">
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
