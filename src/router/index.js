import React from 'react';
import { RouteObject } from "react-router-dom";
import Home from "../components/home"
import CZD from "../components/CaiZhengDuan"
import DWD from "../components/DanWeiDuan"
import NotFound from "../components/not-found"

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/czd",
		element: <CZD />,
	},
	{
		path: "/dwd",
		element: <DWD />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];


export default routes;
