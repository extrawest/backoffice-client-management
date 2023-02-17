import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	MenuList,
	SvgIcon,
	Typography
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { logOut, updateIsLoggedIn } from "@mono-redux-starter/redux";
import {
	AppDispatch,
	useTypedDispatch,
	useTypedSelector
} from "../../store";
import { AppRouteEnum } from "../../types";
import { MenuItem as StyledMenuItem } from "../common/MenuItem/MenuItem";
import { Button } from "../common/Button/Button";
import { sidebarStyles } from "./Sidebar.styles";
import { Image } from "../common/Image/Image";
import { Logout } from "@mui/icons-material";
import { getContentLinks } from "./Sidebar.menu";
import { ExtrawestIcon } from "../../icons";
import { menuItemStyles } from "../common/MenuItem/MenuItem.styles";

export const Sidebar: FC = () => {
	const intl = useIntl();
	const dispatch: AppDispatch = useTypedDispatch();
	const navigate = useNavigate();

	const { isLoading } = useTypedSelector(logOut.select());

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const handleLogOut = () => {
		// logout logic...
		dispatch(updateIsLoggedIn(false));
		navigate(AppRouteEnum.LOGIN);
	};

	return (
		<Box
			component="div"
			sx={sidebarStyles["sidebarContainer"]}
		>
			<Box
				component="div"
				sx={sidebarStyles["sidebarWrap"]}
			>
				<Image
					size="125"
					rounded
					src={managerInfo?.photoUrl}
				/>
				<Typography
					variant="button"
					sx={sidebarStyles["userName"]}
				>
					{managerInfo ? `${managerInfo["firstName"]} ${managerInfo["lastName"]}` : "John Doe"}
				</Typography>
				<Typography
					variant="body2"
					sx={sidebarStyles["role"]}
				>
					{managerInfo && managerInfo["role"]}
				</Typography>
			</Box>
			<Box sx={sidebarStyles["menuWrap"]}>
				<MenuList dense>
					{getContentLinks(intl)?.map(({ href, title, icon }) =>
						<StyledMenuItem
							icon={icon}
							href={href}
							title={title}
							key={title}
						/>)
					}
				</MenuList>
				<Box>
					<Button
						variant="text"
						sx={{
							...sidebarStyles["btnOut"],
						}}
						onClick={handleLogOut}
						isLoading={isLoading}
						isShowText
					>
						<Logout />
						<Typography
							variant="body1"
							fontWeight="400"
						>
							{intl.formatMessage({
								id: "template.signOut",
								defaultMessage: "Sign Out"
							})}
						</Typography>
					</Button>
					<Box sx={sidebarStyles["poweredWrapper"]}>
						<Typography variant="subtitle1">
							<FormattedMessage id="poweredBy"/>
						</Typography>
						<SvgIcon
							sx={menuItemStyles.svgIcon}
							component={() => (
								<ExtrawestIcon
									viewBox="0 0 37 38"
									fontSize="large"
									sx={{overflow: "visible"}}
								/>
							)}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Sidebar;
