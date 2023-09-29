import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const NavbarButton = ({ url, icon, name }) => {
	const [isShow, setIsShow] = useState(false);

	return (
		<NavLink
			to={url}
			onMouseEnter={() => setIsShow(true)}
			onMouseLeave={() => setIsShow(false)}
			className="relative flex justify-center w-1/3 p-4 duration-200 hover:scale-110"
		>
			{icon}
			{isShow && (
				<div className="absolute px-2 py-1 text-sm rounded-xl -bottom-6 bg-gray-950">
					{name}
				</div>
			)}
		</NavLink>
	);
};

export default NavbarButton;
