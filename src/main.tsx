import ReactDOM from "react-dom/client";
import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "antd/dist/antd.less";
import "@/styles/common.less";
import "@/language/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "@/App";

// React 18 创建方式
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	// * react严格模式（可选开启）
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);

// React 17 方式（已废弃，保留作为参考）
// import ReactDOM from "react-dom";
// ReactDOM.render(
// 	<Provider store={store}>
// 		<PersistGate persistor={persistor}>
// 			<App />
// 		</PersistGate>
// 	</Provider>,
// 	document.getElementById("root")
// );
