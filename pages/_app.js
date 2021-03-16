import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/tailwind.css";
import { ThemeProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	console.log(mounted);
	return (
		<ThemeProvider>{mounted && <Component {...pageProps} />}</ThemeProvider>
	);
}

export default MyApp;
