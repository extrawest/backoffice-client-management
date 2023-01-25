import { FC, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { AppRouteEnum } from "../../types/paths";
import { MainLayoutProps } from "./MainLayout.types";
import { mainLayoutStyles } from "./MainLayout.styles";
import { IconButton } from "../../components/common/IconButton/IconButton";
import { Link } from "../../components/common/Link/Link";
import Sidebar from "../../components/Sidebar/Sidebar";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<div
			className="flex overflow-hidden h-100vh"
		>
			<div className="w-96 shadow-md shadow-secondary-main flex justify-center items-center">
				<Sidebar />
			</div>
			<div
				className="xs:mt-48 sm:mt-64 mt-0 p-0 w-100% overflow-x-hidden"
				id="pageWrap"
			>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
