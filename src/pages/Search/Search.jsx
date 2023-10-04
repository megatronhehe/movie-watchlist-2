import React, { useContext } from "react";

import {
	IoSearchOutline,
	IoCloseCircle,
	IoCaretForward,
} from "react-icons/io5";

import { motion } from "framer-motion";

import SearchedMoviesList from "./SearchedMoviesList";

import SearchMoviesContext from "../../context/SearchMoviesContext";

const Search = () => {
	const {
		searchInput,
		setSearchInput,
		handleSearch,
		isDateSortedAsc,
		setIsDateSortedAsc,
	} = useContext(SearchMoviesContext);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col gap-4 p-4 text-sm "
		>
			<section>
				<div className="flex items-center justify-between sm:py-10">
					<h2 className="flex flex-col items-center justify-center w-full gap-2 pl-4 text-xl border-red-400">
						<IoSearchOutline className="text-4xl" />
						Search Movies
					</h2>
				</div>

				<div className="flex justify-center gap-2 mt-4">
					<form
						onSubmit={(e) => e.preventDefault()}
						className="flex justify-center"
					>
						<div className="relative flex items-center w-56 ">
							<input
								name="search"
								placeholder="search by title"
								onChange={handleSearch}
								value={searchInput}
								className="w-full px-4 py-2 text-center duration-200 bg-gray-900 border border-gray-700 outline-none rounded-xl focus:border-blue-300"
							/>
							<IoCloseCircle
								onClick={() => setSearchInput("")}
								className="absolute text-xl text-gray-700 duration-200 cursor-pointer hover:text-red-300 right-2"
							/>
						</div>
					</form>

					<button
						onClick={() => setIsDateSortedAsc((prev) => !prev)}
						className="flex items-center gap-2 px-4 border border-gray-700 rounded-xl"
					>
						<span>new</span>{" "}
						<IoCaretForward
							className={`${isDateSortedAsc ? "rotate-180" : ""} duration-200`}
						/>
						<span>old</span>
					</button>
				</div>

				<SearchedMoviesList />
			</section>
		</motion.div>
	);
};

export default Search;
