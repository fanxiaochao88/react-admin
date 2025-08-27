import screenfull from "screenfull";
import { message } from "antd";
import { useEffect, useState } from "react";

const Fullscreen = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(screenfull.isFullscreen);

	useEffect(() => {
		const changeHandler = () => {
			console.log("🔄 Fullscreen API 状态变化:", screenfull.isFullscreen);
			console.log("📱 当前全屏元素:", document.fullscreenElement);
			setFullScreen(screenfull.isFullscreen);
		};

		// 监听 Fullscreen API 变化
		screenfull.on("change", changeHandler);

		// 尝试监听 F11 按键 (仅作演示，无法检测F11全屏状态)
		const keyHandler = (e: KeyboardEvent) => {
			if (e.key === "F11") {
				console.log("⌨️ 用户按下了F11键");
				console.log("⚠️ 注意：F11全屏无法被Fullscreen API检测到");
			}
		};

		document.addEventListener("keydown", keyHandler);

		return () => {
			screenfull.off("change", changeHandler);
			document.removeEventListener("keydown", keyHandler);
		};
	}, []);

	const handleFullScreen = () => {
		if (!screenfull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌");
		screenfull.toggle();
	};
	return (
		<i className={["icon-style iconfont", fullScreen ? "icon-suoxiao" : "icon-fangda"].join(" ")} onClick={handleFullScreen}></i>
	);
};
export default Fullscreen;
