import { FC } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useIntl } from "react-intl";
import { SearchIcon } from "../../icons";
import {
	Input,
	Layout,
	Row
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { layoutStyle } from "./MainLayout.styles";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const intl = useIntl();
	const fieldText = intl.formatMessage({id: "search"});

	return (
		<Layout style={layoutStyle.root}>
			<Sider
				width="30px"
				style={{background: "transparent"}}
			>
				<Sidebar />
			</Sider>
			<Content style={layoutStyle.content}>
				<Row style={{maxWidth: pxToRem(400), marginBottom: pxToRem(30)}}>
					<Input
						type="text"
						id="search"
						name="search"
						placeholder={fieldText}
						prefix={<SearchIcon />}
					/>
				</Row>
				{children}
			</Content>
		</Layout>
	);
};

export default MainLayout;
