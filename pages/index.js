import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "./countries/countries";

export default function Home() {
	return (
		<>
			<Head>
				<title>Where in the world?</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="min-h-screen text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
				<Navbar />
				<Main />
			</main>
		</>
	);
}
