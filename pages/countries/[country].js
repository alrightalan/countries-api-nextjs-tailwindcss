import useSWR from "swr";
import fetcher from "../../libs/fetcher";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { ThemeProvider } from "../../context/themeContext";
import Navbar from "../../components/Navbar";

const getURL = (country) => `https://restcountries.eu/rest/v2/alpha/${country}`;

export default function DetailPage({ data: initialData, country }) {
	const { data, error } = useSWR(getURL(country), fetcher, { initialData });

	if (error) return "An error has occurred.";
	if (!data) return "Loading...";

	return (
		<ThemeProvider>
			<div className="min-h-screen text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
				<Navbar />
				<div className="flex m-8 my-8 md:mx-16 sm:mb-16 xl:max-w-screen-xl xl:mx-auto">
					<Link href="/">
						<button className="flex items-center px-8 py-2 rounded shadow focus-within:ring bg-light-elements dark:bg-dark-elements focus:outline-none hover:bg-opacity-5">
							<GoArrowLeft className="mr-4" /> Back
						</button>
					</Link>
				</div>
				<div className="items-start h-full max-w-screen-xl gap-16 pb-8 mx-8 justify-evenly md:pb-12 lg:items-center md:mx-32 lg:mx-48 xl:flex xl:mx-auto">
					<div className="flex items-center justify-center overflow-hidden">
						<img
							className="w-full h-auto mb-8 rounded-md md:max-w-2xl"
							src={data.flag}
							alt={`The flag of ${data.name}`}
						/>
					</div>
					<div className="items-center justify-center md:flex-row">
						<h1 className="mb-8 text-2xl font-bold">{data.name}</h1>
						<div className="gap-12 md:flex">
							<ul className="leading-relaxed">
								<li>
									<span className="font-semibold">
										Native Name:{" "}
									</span>
									{data.nativeName}
								</li>
								<li>
									<span className="font-semibold">
										Population:{" "}
									</span>
									{data.population.toLocaleString()}
								</li>
								<li>
									<span className="font-semibold">
										Region:{" "}
									</span>
									{data.region}
								</li>
								<li>
									<span className="font-semibold">
										Sub Region:{" "}
									</span>
									{data.subregion}
								</li>
								<li>
									<span className="font-semibold">
										Capital:{" "}
									</span>
									{data.capital}
								</li>
							</ul>
							<ul className="mt-4 leading-relaxed md:mt-0">
								<li>
									<span className="font-semibold">
										Top level Domain:{" "}
									</span>
									{data.topLevelDomain}
								</li>
								<li>
									<span className="font-semibold">
										Currencies:{" "}
									</span>
									{data.currencies[0].name}
								</li>
								<li>
									<span className="font-semibold">
										Languages:{" "}
									</span>
									{data.languages
										.map((language) => {
											return language.name;
										})
										.join(",  ")}
								</li>
							</ul>
						</div>
						<div className="mt-8 xl:max-w-lg">
							<span className="font-semibold">Borders: </span>
							<br />
							{data.borders.map((border, i) => (
								<Link
									href={"/countries/" + border.toLowerCase()}
									key={i}
								>
									<button
										className="px-4 py-2 mt-2 mr-2 rounded shadow focus-within:ring bg-light-elements dark:bg-dark-elements focus:outline-none hover:bg-opacity-5 dark:hover:bg-opacity-75"
										key={data.alpha3Code}
									>
										{border}
									</button>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export async function getServerSideProps({ query }) {
	const data = await fetcher(getURL(query.country));
	return { props: { initialData: data, country: query.country } };
}
