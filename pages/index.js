import { ThemeProvider } from "../context/themeContext";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "./countries/countries";

export default function Home() {
	return (
		<ThemeProvider>
			<Head>
				<title>Where in the world?</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
				<Navbar />
				<Main />
			</div>
		</ThemeProvider>
	);
}
