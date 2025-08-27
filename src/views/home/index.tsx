import welcome from "@/assets/images/welcome.png";
import { Button, Input, Select, DatePicker, Space, Card } from "antd";
import { RootState, useSelector } from "@/redux";
import "./index.less";

const { Option } = Select;

const Home = () => {
	const { assemblySize } = useSelector((state: RootState) => state.global);

	return (
		<div className="home">
			<Card title={`组件尺寸测试 - 当前设置: ${assemblySize}`} style={{ marginBottom: 20 }}>
				<Space direction="vertical" size="middle" style={{ width: "100%" }}>
					<div>
						<h4>按钮组件：</h4>
						<Space>
							<Button type="primary">主要按钮</Button>
							<Button>默认按钮</Button>
							<Button type="dashed">虚线按钮</Button>
						</Space>
					</div>
					<div>
						<h4>输入组件：</h4>
						<Space>
							<Input placeholder="请输入内容" style={{ width: 200 }} />
							<Select placeholder="请选择" style={{ width: 200 }}>
								<Option value="option1">选项1</Option>
								<Option value="option2">选项2</Option>
							</Select>
							<DatePicker placeholder="请选择日期" />
						</Space>
					</div>
				</Space>
			</Card>
			<div className="welcome-section">
				<img src={welcome} alt="welcome" />
			</div>
		</div>
	);
};

export default Home;
