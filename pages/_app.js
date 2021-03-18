import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	console.log(isMounted);

	return (
		isMounted && (
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		)
	);
}

export default MyApp;
