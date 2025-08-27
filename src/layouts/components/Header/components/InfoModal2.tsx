import { Modal, message } from "antd";

interface Props {
	isShow: boolean;
	setIsShow: (isShow: boolean) => void;
}

const InfoModal = (props: Props) => {
	const handleOk = () => {
		props.setIsShow(false);
		message.success("修改用户信息成功 🎉🎉🎉");
	};

	const handleCancel = () => {
		props.setIsShow(false);
	};
	return (
		<Modal title="个人信息" visible={props.isShow} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
			<p>User Info...</p>
			<p>User Info...</p>
			<p>User Info...</p>
		</Modal>
	);
};
export default InfoModal;
