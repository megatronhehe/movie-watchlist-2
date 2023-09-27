import React from "react";

import { IoHomeOutline, IoSearchOutline, IoGridOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";

const NavbarMobile = () => {
	return (
		<nav className="sticky top-0 z-10 flex flex-col items-center justify-center p-4 text-lg text-gray-200 bg-gray-950 font-extralight bg-opacity-60 backdrop-filter backdrop-blur-md sm:flex">
			<h1 className="tracking-wide text-center">
				My<span className="font-semibold">Watchlist</span>
			</h1>
			<ul className="flex justify-between w-full max-w-4xl mt-4">
				<NavLink to="/" className="flex justify-center w-1/3">
					<IoHomeOutline />
				</NavLink>
				<NavLink to="/search" className="flex justify-center w-1/3">
					<IoSearchOutline />
				</NavLink>
				<NavLink to="/" className="flex justify-center w-1/3">
					<IoGridOutline />
				</NavLink>
			</ul>
		</nav>
	);
};

export default NavbarMobile;
