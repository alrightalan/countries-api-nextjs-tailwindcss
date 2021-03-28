import Link from "next/link";

import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { GoArrowLeft } from "react-icons/go";

export default function DetailPage({ country }) {
	return (
		<div className="min-h-screen text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
			<Navbar />
			<div className="flex py-8 mx-8 mb-4 md:mx-16 lg:mb-8 xl:max-w-screen-xl xl:mx-auto">
				<Link href="/countries/">
					<button className="flex items-center px-8 py-4 rounded shadow focus-within:ring bg-light-elements dark:bg-dark-elements focus:outline-none hover:bg-opacity-5">
						<GoArrowLeft className="mr-4" /> Back
					</button>
				</Link>
			</div>

			<div className="max-w-screen-xl gap-24 pb-8 mx-8 xl:mt-24 md:pb-12 lg:pb-0 lg:items-center md:mx-24 xl:px-12 lg:mx-32 xl:flex xl:mx-auto">
				<img
					className="w-full h-auto rounded-md md:max-w-2xl xl:max-w-xl"
					src={ country.flag }
					alt={ `The flag of ${country.name}` }
				/>

				<div className="items-center justify-center pt-12 lg:pt-16 xl:p-0 md:flex-row">
					<h1 className="mb-8 text-2xl font-bold">{ country.name }</h1>
					<div className="gap-12 md:flex">
						<ul className="leading-relaxed">
							<li>
								<span className="font-semibold">
									Native Name:{ " " }
								</span>
								{ country.nativeName }
							</li>
							<li>
								<span className="font-semibold">
									Population:{ " " }
								</span>
								{ country.population.toLocaleString() }
							</li>
							<li>
								<span className="font-semibold">Region: </span>
								{ country.region }
							</li>
							<li>
								<span className="font-semibold">
									Sub Region:{ " " }
								</span>
								{ country.subregion }
							</li>
							<li>
								<span className="font-semibold">Capital: </span>
								{ country.capital }
							</li>
						</ul>
						<ul className="mt-4 leading-relaxed md:mt-0">
							<li>
								<span className="font-semibold">
									Top level Domain:{ " " }
								</span>
								{ country.topLevelDomain }
							</li>
							<li>
								<span className="font-semibold">
									Currencies:{ " " }
								</span>
								{ country.currencies[0].name }
							</li>
							<li>
								<span className="font-semibold">
									Languages:{ " " }
								</span>
								{ country.languages
									.map((language) => {
										return language.name;
									})
									.join(",  ") }
							</li>
						</ul>
					</div>
					<div className="mt-8 xl:max-w-lg">
						<span className="font-semibold">Borders: </span>
						<br />

						{ country.borders.length > 0 ? (
							country.borders.map((border, i) => (
								<Link href={ "/countries/" + border } key={ i }>
									<button
										className="px-4 py-2 mt-2 mr-2 rounded shadow focus-within:ring bg-light-elements dark:bg-dark-elements focus:outline-none hover:bg-opacity-5 dark:hover:bg-opacity-75"
										key={ country.alpha3Code }
									>
										{ border }
									</button>
								</Link>
							))
						) : (
							<p>None</p>
						) }




					</div>
				</div>
			</div>
		</div>
	);
}

export const getStaticPaths = async () => {
	const res = await fetch("https://restcountries.eu/rest/v2/all/");
	const data = await res.json();

	const paths = data.map((country) => {
		return {
			params: { id: country.alpha3Code },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const res = await fetch(
		`https://restcountries.eu/rest/v2/alpha/${params.id}`
	);
	const data = await res.json();

	return {
		props: { country: data },
	};
};
