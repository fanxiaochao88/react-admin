import { useRef, useState } from "react";
import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { useDispatch } from "@/redux";
import { setToken } from "@/redux/modules/global";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import InfoModal2 from "./InfoModal2";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	interface ModalProps {
		showModal: (params: { name: number }) => void;
		test?: () => void;
	}
	const passRef = useRef<ModalProps>(null);
	const infoRef = useRef<ModalProps>(null);
	const [isShow, setIsShow] = useState(false);

	// 退出登录
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				dispatch(setToken(""));
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

	const handleInfoModal = () => {
		infoRef.current!.showModal({ name: 11 });
		infoRef.current!.test?.();
	};

	// Dropdown Menu
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">首页</span>,
					onClick: () => navigate(HOME_URL)
				},
				{
					key: "2",
					label: <span className="dropdown-item">个人信息</span>,
					onClick: () => handleInfoModal()
				},
				{
					key: "3",
					label: <span className="dropdown-item">修改密码</span>,
					onClick: () => passRef.current!.showModal({ name: 11 })
				},
				{
					type: "divider"
				},
				{
					key: "4",
					label: <span className="dropdown-item">退出登录</span>,
					onClick: logout
				},
				{
					key: "5",
					label: <span className="dropdown-item">个人信息2</span>,
					onClick: () => setIsShow(true)
				}
			]}
		></Menu>
	);
	return (
		<>
			<Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
			<InfoModal2 isShow={isShow} setIsShow={setIsShow}></InfoModal2>
		</>
	);
};

export default AvatarIcon;
