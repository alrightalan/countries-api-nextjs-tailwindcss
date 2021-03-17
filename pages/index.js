import Head from "next/head";
import Main from "./countries/countries";
import Navbar from "../components/Navbar"

export default function Home() {
	return (
		<>
			<Head>
				<title>Where in the world?</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1>Hello!</h1>
		</>
	);
}
