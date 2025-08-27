const menuList = [
	{
		icon: "HomeOutlined",
		title: "首页",
		path: "/home/index"
	},
	{
		icon: "AreaChartOutlined",
		title: "数据大屏",
		path: "/dataScreen/index"
	},
	{
		icon: "TableOutlined",
		title: "超级表格",
		path: "/proTable",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/proTable/useHooks",
				title: "使用 Hooks"
			},
			{
				icon: "AppstoreOutlined",
				path: "/proTable/useComponent",
				title: "使用 Component"
			}
		]
	},
	{
		icon: "FundOutlined",
		title: "Dashboard",
		path: "/dashboard",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/dashboard/dataVisualize",
				title: "数据可视化"
			},
			{
				icon: "AppstoreOutlined",
				path: "/dashboard/embedded",
				title: "内嵌页面"
			}
		]
	},
	{
		icon: "FileTextOutlined",
		title: "表单 Form",
		path: "/form",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/form/basicForm",
				title: "基础 Form"
			},
			{
				icon: "AppstoreOutlined",
				path: "/form/validateForm",
				title: "校验 Form"
			},
			{
				icon: "AppstoreOutlined",
				path: "/form/dynamicForm",
				title: "动态 Form"
			}
		]
	},
	{
		icon: "PieChartOutlined",
		title: "Echarts",
		path: "/echarts",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/echarts/waterChart",
				title: "水型图"
			},
			{
				icon: "AppstoreOutlined",
				path: "/echarts/columnChart",
				title: "柱状图"
			},
			{
				icon: "AppstoreOutlined",
				path: "/echarts/lineChart",
				title: "折线图"
			},
			{
				icon: "AppstoreOutlined",
				path: "/echarts/pieChart",
				title: "饼图"
			},
			{
				icon: "AppstoreOutlined",
				path: "/echarts/radarChart",
				title: "雷达图"
			},
			{
				icon: "AppstoreOutlined",
				path: "/echarts/nestedChart",
				title: "嵌套环形图"
			}
		]
	},
	{
		icon: "ShoppingOutlined",
		title: "常用组件",
		path: "/assembly",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/assembly/guide",
				title: "引导页"
			},
			{
				icon: "AppstoreOutlined",
				path: "/assembly/svgIcon",
				title: "Svg 图标"
			},
			{
				icon: "AppstoreOutlined",
				path: "/assembly/selectIcon",
				title: "Icon 选择"
			},
			{
				icon: "AppstoreOutlined",
				path: "/assembly/batchImport",
				title: "批量导入数据"
			}
		]
	},
	{
		icon: "ProfileOutlined",
		title: "菜单嵌套",
		path: "/menu",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/menu/menu1",
				title: "菜单1"
			},
			{
				icon: "AppstoreOutlined",
				path: "/menu/menu2",
				title: "菜单2",
				children: [
					{
						icon: "AppstoreOutlined",
						path: "/menu/menu2/menu21",
						title: "菜单2-1"
					},
					{
						icon: "AppstoreOutlined",
						path: "/menu/menu2/menu22",
						title: "菜单2-2",
						children: [
							{
								icon: "AppstoreOutlined",
								path: "/menu/menu2/menu22/menu221",
								title: "菜单2-2-1"
							},
							{
								icon: "AppstoreOutlined",
								path: "/menu/menu2/menu22/menu222",
								title: "菜单2-2-2"
							}
						]
					},
					{
						icon: "AppstoreOutlined",
						path: "/menu/menu2/menu23",
						title: "菜单2-3"
					}
				]
			},
			{
				icon: "AppstoreOutlined",
				path: "/menu/menu3",
				title: "菜单3"
			}
		]
	},
	{
		icon: "ExclamationCircleOutlined",
		title: "错误页面",
		path: "/error",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/404",
				title: "404页面"
			},
			{
				icon: "AppstoreOutlined",
				path: "/403",
				title: "403页面"
			},
			{
				icon: "AppstoreOutlined",
				path: "/500",
				title: "500页面"
			}
		]
	},
	{
		icon: "PaperClipOutlined",
		title: "外部链接",
		path: "/link",
		children: [
			{
				icon: "AppstoreOutlined",
				path: "/link/gitee",
				title: "Gitee 仓库",
				isLink: "https://gitee.com/laramie/Hooks-Admin"
			},
			{
				icon: "AppstoreOutlined",
				path: "/link/github",
				title: "GitHub 仓库",
				isLink: "https://github.com/HalseySpicy/Hooks-Admin"
			},
			{
				icon: "AppstoreOutlined",
				path: "/link/juejin",
				title: "掘金文档",
				isLink: "https://juejin.cn/user/3263814531551816/posts"
			},
			{
				icon: "AppstoreOutlined",
				path: "/link/myBlog",
				title: "个人博客",
				isLink: "http://www.spicyboy.cn"
			}
		]
	}
];

// 目标：从菜单树生成面包屑映射对象
// 期望结果：
// {
//   "/home/index": ["首页"],
//   "/dataScreen/index": ["数据大屏"],
//   "/proTable/useHooks": ["超级表格", "使用 Hooks"],
//   "/proTable/useComponent": ["超级表格", "使用 Component"]
// }

/**
 * 方法一：递归深度优先遍历（推荐）
 * 思路：递归遍历树，维护父级路径，叶子节点时保存映射关系
 */
function createBreadcrumbMap(menuList) {
	const result = {};

	function traverse(items, parentTitles = []) {
		items.forEach(item => {
			const currentTitles = [...parentTitles, item.title];

			if (item.children && item.children.length > 0) {
				// 有子节点：继续递归
				traverse(item.children, currentTitles);
			} else {
				// 叶子节点：保存路径映射
				result[item.path] = currentTitles;
			}
		});
	}

	traverse(menuList);
	return result;
}

// /**
//  * 方法二：栈模拟递归（适合深层嵌套）
//  * 思路：用栈避免递归调用栈溢出
//  */
// function createBreadcrumbMapWithStack(menuList) {
// 	const result = {};
// 	const stack = [];

// 	// 初始化栈：将顶层菜单项入栈
// 	menuList.forEach(item => {
// 		stack.push({ item, titles: [item.title] });
// 	});

// 	while (stack.length > 0) {
// 		const { item, titles } = stack.pop();

// 		if (item.children && item.children.length > 0) {
// 			// 有子节点：将子节点入栈
// 			item.children.forEach(child => {
// 				stack.push({
// 					item: child,
// 					titles: [...titles, child.title]
// 				});
// 			});
// 		} else {
// 			// 叶子节点：保存路径映射
// 			result[item.path] = titles;
// 		}
// 	}

// 	return result;
// }

// /**
//  * 方法三：广度优先遍历（层层处理）
//  * 思路：按层级处理，适合需要层级信息的场景
//  */
// function createBreadcrumbMapBFS(menuList) {
// 	const result = {};
// 	const queue = [];

// 	// 初始化队列
// 	menuList.forEach(item => {
// 		queue.push({ item, titles: [item.title] });
// 	});

// 	while (queue.length > 0) {
// 		const { item, titles } = queue.shift();

// 		if (item.children && item.children.length > 0) {
// 			// 有子节点：将子节点加入队列
// 			item.children.forEach(child => {
// 				queue.push({
// 					item: child,
// 					titles: [...titles, child.title]
// 				});
// 			});
// 		} else {
// 			// 叶子节点：保存路径映射
// 			result[item.path] = titles;
// 		}
// 	}

// 	return result;
// }

// 测试所有方法
console.log("=== 方法一（递归）===");
console.log(createBreadcrumbMap(menuList));

// console.log("\n=== 方法二（栈）===");
// console.log(createBreadcrumbMapWithStack(menuList));

// console.log("\n=== 方法三（BFS）===");
// console.log(createBreadcrumbMapBFS(menuList));
