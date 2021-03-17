import Head from "next/head";
import Main from "./countries/countries";

export default function Home() {
	return (
		<>
			<Head>
				<title>Where in the world?</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main />
		</>
	);
}
