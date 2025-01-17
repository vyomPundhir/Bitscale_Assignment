import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import TableViewPage from "./pages/TableViewPage";
import CardViewPage from "./pages/CardViewPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<LoginPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="profile" element={<ProfilePage />} />
			<Route path="tableView" element={<TableViewPage />} />
			<Route path="cardView" element={<CardViewPage />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
