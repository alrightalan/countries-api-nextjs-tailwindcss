import Link from "next/link";
import dynamic from "next/dynamic";
import { IoMdGlobe } from "react-icons/io";

const Navbar = () => {
	const DynamicToggle = dynamic(() => import("../context/themeToggle"), {
		ssr: false,
	});
	return (
		<header className="sticky top-0 z-20 flex items-center h-20 shadow-md text-dark-elements bg-light-elements dark:bg-dark-elements dark:text-light-elements">
			<div className="flex items-center justify-between w-full mx-8 md:mx-16 xl:max-w-screen-xl xl:mx-auto">
				<Link href="/">
					<h1 className="flex items-center text-lg font-bold cursor-pointer select-none sm:text-2xl">
						<IoMdGlobe className="mr-4 text-4xl" />
						Where in the world?
					</h1>
				</Link>
				<DynamicToggle />
			</div>
		</header>
	);
};

export default Navbar;
