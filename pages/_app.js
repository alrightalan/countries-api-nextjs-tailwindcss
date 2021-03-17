import "../styles/globals.css";
import "../styles/tailwind.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	console.log(isMounted);

	return (
		isMounted && (
			<ThemeProvider
				forcedTheme={Component.theme || undefined}
				attribute="class"
			>
				<Component {...pageProps} />
			</ThemeProvider>
		)
	);
}

export default MyApp;
