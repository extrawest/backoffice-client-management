import { FC, useState } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useIntl } from "react-intl";
import { SearchIcon } from "../../icons";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const intl = useIntl();
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const fieldText = intl.formatMessage({id: "search"});

	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
			>
				<Sidebar />
			</Sider>
			<Content
				className="xs:mt-4 mt-0 w-full overflow-x-hidden p-4"
				id="pageWrap"
			>
				<div className="max-w-30rem w-full p-2 flex gap-2 border-1 border-solid border-gray-400 border-round-half ml-6">
					<SearchIcon />
					<input
						type="text"
						id="search"
						name="search"
						className="w-full text-lg font-medium outline-none text-gray-600 border-none"
						placeholder={fieldText}
					/>
				</div>
				{children}
			</Content>
		</Layout>
	);
};

export default MainLayout;
