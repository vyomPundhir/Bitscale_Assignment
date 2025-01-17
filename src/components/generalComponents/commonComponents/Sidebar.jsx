/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { useLocation, Link } from "react-router-dom";

import { sidebarOptions } from "../../../constants/sidebarConstants";

const Sidebar = ({ setIsSidebarVissible }) => {
	const location = useLocation();

	useEffect(() => {
		setIsSidebarVissible(false);
	}, [location, setIsSidebarVissible]);

	return (
		<ul className="menu bg-zinc-300 dark:bg-zinc-800 min-h-full w-40 p-4">
			{sidebarOptions.map((option) => (
				<li key={option.id}>
					<Link to={option.route}>{option.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default Sidebar;
