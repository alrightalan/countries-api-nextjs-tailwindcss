import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
	return (
		<>
			<div className="flex items-center justify-center min-h-screen text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
				<FaSpinner />
				<p className="p-4">Loading . . .</p>
			</div>
		</>
	);
};

export default Loading;
