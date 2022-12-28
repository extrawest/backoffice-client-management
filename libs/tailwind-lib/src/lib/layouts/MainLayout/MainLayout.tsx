import { FC, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AppRouteEnum } from "../../types/paths";
import { MainLayoutProps } from "./MainLayout.types";
import { mainLayoutStyles } from "./MainLayout.styles";
import { IconButton } from "../../components/IconButton/IconButton";
import { Link } from "../../components/Link/Link";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<div
			className="flex overflow-hidden h-100vh"
		>
			<div
				className="fixed z-2 xs:flex md:none"
			>
				<div>
					<IconButton
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Link
						to={AppRouteEnum.DASHBOARD}
					>
						Lagoon
					</Link>
				</div>
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
