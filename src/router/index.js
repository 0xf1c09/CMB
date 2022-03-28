import React from 'react';
import { RouteObject } from "react-router-dom";
import Home from "../components/home"
import CZD from "../components/CaiZhengDuan"
import DWD from "../components/DanWeiDuan"
import NotFound from "../components/not-found"

const routes: RouteObject[] = [
	{
		path: "/CMB",
		element: <Home />,
	},
	{
		path: "/CMB/czd",
		element: <CZD />,
	},
	{
		path: "/CMB/dwd",
		element: <DWD />,
	},
	{
		path: "/CMB/*",
		element: <NotFound />,
	},
];


export default routes;
