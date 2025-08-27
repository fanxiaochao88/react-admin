import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login/index";

// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.tsx");

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

// 重点
// 不同的导出方式, 对于metaRouters[key][key2]的key2的值不同,默认导出是default
// , 而export const dashboardRouter: Array<RouteObject> = [] 导出的是dashboardRouter\
// 原作者的写法, 第二层Object.keys()兼容多种导出方式, 而且兼容一个文件多个导出

// 我自己写的
// // const temp: RouteObject[] = [];
// Object.keys(metaRouters).forEach(key => {
// 	console.log(metaRouters[key]);
// 	// temp.push(...metaRouters[key]);
// });
// // console.log("temp: ", temp);

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
