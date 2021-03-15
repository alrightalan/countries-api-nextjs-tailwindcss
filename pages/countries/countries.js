import { useState } from "react";

import Link from "next/link";
import useSWR from "swr";
import fetcher from "../../libs/fetcher";

import SearchBar from "../../components/SearchBar";
import RegionFilter from "../../components/RegionFilter";
import CountryCard from "../../components/CountryCard";

export default function Main({ initialData }) {
	const { data } = useSWR("https://restcountries.eu/rest/v2/all", fetcher, {
		initialData,
	});

	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	return (
		<main className="max-w-screen-xl pb-16 mx-8 md:mx-16 xl:mx-auto">
			<div className="flex-row items-center justify-between my-8 sm:flex sm:mb-16">
				<SearchBar search={search} setSearch={setSearch} />
				<RegionFilter filter={filter} setFilter={setFilter} />
			</div>

			<div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
				{data &&
					data
						.filter(
							(country) =>
								country.region.includes(filter) &&
								country.name.toLowerCase().includes(search)
						)

						.map((country) => (
							<Link
								href={
									"/countries/" +
									country.alpha3Code.toLowerCase()
								}
								key={country.alpha3Code}
							>
								<div>
									<CountryCard country={country} />
								</div>
							</Link>
						))}
			</div>
		</main>
	);
}

export async function getServerSideProps() {
	const data = await fetcher("https://restcountries.eu/rest/v2/all");
	return { props: { initialData: data } };
}
