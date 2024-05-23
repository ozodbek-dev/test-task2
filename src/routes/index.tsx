/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Spinner from "components/spinner";
import { lazy } from "react";
import Private from "./privateRoute";
import App from "components/Layout";

const NotFound = lazy(() => import("pages/notfound"));
const Create = lazy(() => import("pages/home/pages/create"));
const List = lazy(() => import("pages/home/pages/list"));

const router = () => {
	return createBrowserRouter([
		{
			path: "/create",
			element: <App />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: (
						<Private>
							<Create />
						</Private>
					),
					loader: Spinner,
				},
			],
		},
		{
			path: "/",
			element: <App />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: <List />,
					loader: Spinner,
				},
			],
		},
	]);
};

export default router;
