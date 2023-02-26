import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Grid,
	GridColumn,
	Menu
} from "semantic-ui-react";
import { ExtrawestIcon } from "../../icons";
import {
	AppDispatch,
	useTypedDispatch,
	useTypedSelector
} from "../../store";
import { AppRouteEnum } from "../../types";
import { TypographyEnum } from "../../types/typography";
import { Button } from "../common/Button/Button";
import { Image } from "../common/Image/Image";
import { MenuItem } from "../common/MenuItem/MenuItem";
import { Typography } from "../common/Typography/Typography";
import { getContentLinks } from "./Sidebar.menu";
import { sidebarStyles } from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";

export const Sidebar: FC<SidebarProps> = ({handleClose}) => {
	const intl = useIntl();
	const dispatch: AppDispatch = useTypedDispatch();
	const navigate = useNavigate();

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const handleLogOut = () => {
		dispatch(updateIsLoggedIn(false));
		navigate(AppRouteEnum.LOGIN);
	};

	return (
		<Container
			fluid
			style={sidebarStyles.container}
		>
			<Grid
				columns={1}
				style={{height: "100%"}}
			>
				<GridColumn style={sidebarStyles.sidebarTitleWrapper}>
					<Image
						size="large"
						rounded
					/>
					<div style={sidebarStyles.sidebarTitle}>
						<Typography
							type={TypographyEnum.H5}
						>
							{managerInfo ? `${managerInfo["firstName"]} ${managerInfo["lastName"]}` : "John Doe"}
						</Typography>
						<Typography
							type={TypographyEnum.DESCRIPTION}
						>
							Admin
						</Typography>
					</div>
				</GridColumn>
				<GridColumn style={sidebarStyles.menuWrapper}>
					<Menu style={sidebarStyles.menu}>
						{getContentLinks(intl)?.map(({ href, title, icon }) =>
							<MenuItem
								icon={icon}
								href={href}
								title={title}
								key={title}
								handleClick={handleClose}
							/>)
						}
					</Menu>
					<GridColumn style={{marginTop: pxToRem(20)}}>
						<Button
							onClick={handleLogOut}
							content={intl.formatMessage({id: "template.signOut"})}
							icon="sign out"
							type="button"
						/>
						<div style={sidebarStyles.copyright}>
							<Typography type={TypographyEnum.SUBTITLE1}>
								<FormattedMessage id="poweredBy" />
							</Typography>
							<ExtrawestIcon />
						</div>
					</GridColumn>
				</GridColumn>
			</Grid>
		</Container>
	);
};

export default Sidebar;
