import { useAtomValue } from "jotai";

import { themeAtom } from "../../atoms/theme/store";

import CardsList from "./CardsList";

import plusBlack from "../../assets/cardViewAssets/plusBlack.svg";
import plusWhite from "../../assets/cardViewAssets/plusWhite.svg";

const Layout = () => {
	const theme = useAtomValue(themeAtom);

	return (
		<div className="py-5">
			<CardsList />
			<button className="flex flex-row justify-center items-center gap-1 mt-7 ml-5 ring-1 ring-blue-600 rounded-sm px-3 py-1">
				<img
					src={theme === "dark" ? plusWhite : plusBlack}
					alt="icon"
					className="w-[20px]"
				/>
				<span className="text-[14px]">Add New Card</span>
			</button>
		</div>
	);
};

export default Layout;
