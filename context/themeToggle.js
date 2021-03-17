import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";


const Toggle = () => {
	const { theme, setTheme } = useTheme();
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

			<IoSunny
				onClick={ switchTheme }
				className="text-2xl cursor-pointer" />


			<IoMoon
				onClick={ switchTheme }
				className="text-2xl cursor-pointer" />

		</div>

	);
};

export default Toggle;
