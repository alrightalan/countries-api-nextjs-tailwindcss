import { useState, useEffect } from "react";

import Link from "next/link";
import axios from "axios";

import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import RegionFilter from "../../components/RegionFilter";
import CountryCard from "../../components/CountryCard";

export default function Main() {
	const [countries, setCountries] = useState([]);

	const fetchData = async () => {
		const { data } = await axios.get(
			"https://restcountries.eu/rest/v2/all"
		);
		setCountries(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	return (
		<>
			<Navbar />
			<main className="max-w-screen-xl min-h-screen pb-16 mx-8 md:mx-16 xl:mx-auto">
				<div className="flex-row items-center justify-between py-8 sm:flex sm:mb-16">
					<SearchBar search={search} setSearch={setSearch} />
					<RegionFilter filter={filter} setFilter={setFilter} />
				</div>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
					{countries &&
						countries
							.filter(
								(country) =>
									country.region.includes(filter) &&
									country.name.toLowerCase().includes(search)
							)

							.map((country) => (
								<Link
									href={`/countries/${country.alpha3Code}`}
									key={country.alpha3Code}
								>
									<div>
										<CountryCard country={country} />
									</div>
								</Link>
							))}
				</div>
			</main>
		</>
	);
}
