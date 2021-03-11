import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const RegionFilter = ({ setFilter }) => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="relative">
			<div
				onClick={() => setToggleMenu(!toggleMenu)}
				onBlur={() => setToggleMenu(false)}
				className="overflow-hidden rounded-md shadow cursor-pointer bg-light-elements dark:bg-dark-elements dark:text-light-elements focus-within:ring"
			>
				<button className="flex items-center justify-between w-full p-4 focus:outline-none hover:opacity-75">
					{"Filter by Region" || setFilter()}
					<GoChevronDown
						className={`transform transition-transform ml-4 ${
							toggleMenu && "rotate-180"
						}`}
					/>
				</button>
			</div>
			{toggleMenu && (
				<div
					className="absolute z-10 flex flex-col w-full mt-2 overflow-hidden rounded-md shadow text-dark-elements bg-light-elements dark:bg-dark-elements dark:text-light-elements focus:outline-none"
					onClick={() => setToggleMenu(false)}
				>
					<button
						value=""
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						onClick={(e) => setFilter(e.target.value)}
						className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
					>
						All
					</button>
					<button
						value="Africa"
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						onClick={(e) => setFilter(e.target.value)}
						className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
					>
						Africa
					</button>
					<button
						value="Americas"
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						onClick={(e) => setFilter(e.target.value)}
						className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
					>
						Americas
					</button>
					<button
						value="Asia"
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						onClick={(e) => setFilter(e.target.value)}
						className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
					>
						Asia
					</button>
					<button
						value="Europe"
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						onClick={(e) => setFilter(e.target.value)}
						className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
					>
						Europe
					</button>
					<button
						value="Oceania"
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						onClick={(e) => setFilter(e.target.value)}
						className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
					>
						Oceania
					</button>
				</div>
			)}
		</div>
	);
};

export default RegionFilter;
