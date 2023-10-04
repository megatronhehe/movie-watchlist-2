import React from "react";
import PopularMoviesList from "./PopularMoviesList";

import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full gap-4 p-4 text-sm"
		>
			<section>
				<div className="flex items-center justify-between">
					<h2 className="pl-4 text-xl border-l-4 border-red-400">
						Popular Movies
					</h2>
				</div>
				<PopularMoviesList />
			</section>
		</motion.div>
	);
};

export default Home;
