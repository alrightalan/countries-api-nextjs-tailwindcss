import Head from "next/head";
import Main from "./countries/index";

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
