import React from "react";

import {
	IoHomeOutline,
	IoHome,
	IoSearchOutline,
	IoSearch,
	IoGridOutline,
	IoGrid,
} from "react-icons/io5";

import NavbarButton from "./NavbarButton";
import { NavLink } from "react-router-dom";

const NavbarMobile = () => {
	return (
		<nav className="sticky top-0 z-10 flex justify-center text-lg text-gray-200 bg-gray-950 font-extralight bg-opacity-60 backdrop-filter backdrop-blur-md">
			<div className="flex flex-col items-center w-full max-w-4xl sm:flex-row sm:justify-between">
				<NavLink to="/" className="p-4 tracking-wide text-center">
					My<span className="font-semibold">Watchlist</span>
				</NavLink>

				<ul className="flex justify-between w-full gap-8 px-4 sm:w-auto ">
					<NavbarButton
						url="/"
						icon={<IoHomeOutline />}
						activeIcon={<IoHome />}
						name="Home"
					/>

					<NavbarButton
						url="/search"
						icon={<IoSearchOutline />}
						activeIcon={<IoSearch />}
						name="Search"
					/>

					<NavbarButton
						url="/watchlist"
						icon={<IoGridOutline />}
						activeIcon={<IoGrid />}
						name="Watchlist"
					/>
				</ul>
			</div>
		</nav>
	);
};

export default NavbarMobile;
