import { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./components/generalComponents/commonComponents/Navbar";
import Sidebar from "./components/generalComponents/commonComponents/Sidebar";

function App() {
	const [isSidebarVissible, setIsSidebarVissible] = useState(false);

	const handleSidebarToggle = () => {
		if (isSidebarVissible) {
			setIsSidebarVissible(false);
		} else {
			setIsSidebarVissible(true);
		}
	};

	return (
		<div className="drawer text-black dark:text-white bg-white dark:bg-black">
			<input
				id="my-drawer"
				type="checkbox"
				className="drawer-toggle"
				onChange={handleSidebarToggle}
				checked={isSidebarVissible}
			/>
			<div className="drawer-content min-h-screen max-w-7xl mx-auto w-full lg:px-10">
				{/* Page content here */}
				<Navbar sidebarToggle={handleSidebarToggle} />
				<Outlet />
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<Sidebar setIsSidebarVissible={setIsSidebarVissible} />
			</div>
		</div>
	);
}

export default App;
