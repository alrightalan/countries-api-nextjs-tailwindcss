import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
	const router = useRouter();

	if (typeof window !== "undefined") {
		router.push("/countries");
	}
	return (
		<>
			<Head>
				<title>Where in the world?</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
}
