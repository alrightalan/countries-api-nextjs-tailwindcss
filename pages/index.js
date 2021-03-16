import Head from "next/head";
import Main from "./countries/countries";

export default function Home() {
	return (
		<>
			<main className="text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
				<Head>
					<title>Where in the world?</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Main />
			</main>
		</>
	);
}
