import Link from "next/link";
import Toggle from "../context/themeToggle";

const Navbar = () => {
	return (
		<header className="sticky top-0 z-20 flex items-center h-20 shadow-md text-dark-elements bg-light-elements dark:bg-dark-elements dark:text-light-elements">
			<div className="flex items-center justify-between w-full mx-8 md:mx-16 xl:max-w-screen-xl xl:mx-auto">
				<Link href="/">
					<h1 className="text-lg font-bold cursor-pointer select-none sm:text-2xl">
						Where in the world?
					</h1>
				</Link>
				{ process.browser ? <Toggle /> : null }
			</div>
		</header>
	);
};

export default Navbar;
