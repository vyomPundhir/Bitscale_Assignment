/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import { useAtomValue } from "jotai";

import { themeAtom } from "../../atoms/theme/store";

const DataCard = ({ data }) => {
	const theme = useAtomValue(themeAtom);

	return (
		<div className="w-full dark:bg-zinc-800 bg-zinc-200 shadow-lg shadow-gray-400 dark:shadow-zinc-700 hover:shadow-blue-300 duration-500 ease-in-out hover:dark:shadow-blue-900 px-5 py-3 rounded-md flex flex-row justify-start items-center flex-wrap gap-x-10 gap-y-4">
			<span>{data.id}</span>
			<Link
				to={`https://github.com/vyomPundhir`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={theme === "dark" ? data.iconDark : data.iconLight}
					alt="video-play-icon"
					className="w-[30px] cursor-pointer"
				/>
			</Link>

			{data.keyValuePairs.map((pair, index) => (
				<div
					key={index}
					className="flex flex-row justify-start items-center gap-1"
				>
					<span className="text-[14px]">{pair.keyName}</span>
					{data.id === 3 && index === 1 ? (
						<Link
							to={pair.keyValue}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 underline underline-offset-2"
						>
							Link
						</Link>
					) : (
						<span className="text-[14px]">{pair.keyValue}</span>
					)}
				</div>
			))}
		</div>
	);
};

export default DataCard;
