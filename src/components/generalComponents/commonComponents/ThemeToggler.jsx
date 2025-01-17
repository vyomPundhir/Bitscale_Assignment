import { useAtomValue, useSetAtom } from "jotai";

import { themeAtom } from "../../../atoms/theme/store";

import moonBlack from "../../../assets/generalAssets/moon-black.svg";
import moonWhite from "../../../assets/generalAssets/moon-white.svg";

import sunBlack from "../../../assets/generalAssets/sun-black.svg";
import sunWhite from "../../../assets/generalAssets/sun-white.svg";

const ThemeToggler = () => {
	const theme = useAtomValue(themeAtom);

	const setTheme = useSetAtom(themeAtom);

	const handleThemeToggle = () => {
		const htmlTag = document.getElementById("htmlTag");

		const defaultHtmlClass = document.getElementById("htmlTag").classList[0];

		if (defaultHtmlClass === "dark") {
			htmlTag.classList.remove("dark");
			htmlTag.classList.add("light");
			setTheme("light");
		} else {
			htmlTag.classList.remove("light");
			htmlTag.classList.add("dark");
			setTheme("dark");
		}
	};

	return (
		<div className="flex flex-row justify-center items-center gap-[7px] ">
			<img
				src={theme === "dark" ? moonWhite : moonBlack}
				alt="moon-icon"
				className="w-[20px]"
			/>
			<input
				type="checkbox"
				onChange={handleThemeToggle}
				className="toggle toggle-xs"
				checked={theme === "light"}
			/>
			<img
				src={theme === "dark" ? sunWhite : sunBlack}
				alt="moon-icon"
				className="w-[25px]"
			/>
		</div>
	);
};

export default ThemeToggler;
