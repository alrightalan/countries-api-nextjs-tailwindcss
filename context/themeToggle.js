import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className="p-2 transition duration-500 ease-in-out rounded-full">
			{theme === "dark" ? (
				<IoSunny
					onClick={ () =>
						setTheme(theme === "dark" ? "light" : "dark")
					}
					className="text-2xl cursor-pointer"
				/>
			) : (
				<IoMoon
					onClick={ () =>
						setTheme(theme === "dark" ? "light" : "dark")
					}
					className="text-2xl cursor-pointer"
				/>
			) }
		</div>
	);
};

export default Toggle;
