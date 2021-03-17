import React, { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === "light" ? "dark" : "light");
		}
	};

	console.log(isMounted);

	return (
		<div className="p-2 transition duration-500 ease-in-out rounded-full">
			{theme === "dark" ? (
				<IoSunny
					onClick={switchTheme}
					className="text-2xl cursor-pointer"
				/>
			) : (
				<IoMoon
					onClick={switchTheme}
					className="text-2xl cursor-pointer"
				/>
			)}
		</div>
	);
};

export default Toggle;
