import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
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
import { Sidebar as PrimarySidebar } from "primereact/sidebar";
import { IconButton } from "../common/IconButton/IconButton";
import { ExtrawestIcon } from "../../icons";

export const Sidebar: FC = () => {
	const intl = useIntl();
	const dispatch: AppDispatch = useTypedDispatch();
	const navigate = useNavigate();
	const [visible, setVisible] = useState<boolean>(false);

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const handleLogOut = () => {
		// logout logic...
		dispatch(updateIsLoggedIn(false));
		navigate(AppRouteEnum.LOGIN);
	};

	const handleOpenSidebar = () => {
		setVisible(true);
	};

	const handleCloseSidebar = () => {
		setVisible(false);
	};

	return (
		<div className="py-3">
			<IconButton
				icon="pi pi-th-large text-lg"
				extraClasses="bg-transparent z-5 relative"
				onClick={handleOpenSidebar}
			/>
			<PrimarySidebar
				visible={visible}
				onHide={handleCloseSidebar}
				position="left"
				modal
				maskClassName="bg-black-alpha-40"
				showCloseIcon={false}
			>
				<div className="w-60 h-full flex flex-column justify-content-start shrink-0 text-gray-800 outline-none bg-white py-2">
					<div className="mb-2 flex flex-column p-4">
						<Image
							size="large"
							rounded
						/>
						<div className="flex flex-column align-items-start">
							<Typography
								type={TypographyEnum.H5}
								extraClasses="block mt-5 lg:text-3xl"
							>
								{managerInfo ? `${managerInfo["firstName"]} ${managerInfo["lastName"]}` : "John Doe"}
							</Typography>
							<Typography
								type={TypographyEnum.DESCRIPTION}
								extraClasses="block mt-1"
							>
								Admin
							</Typography>
						</div>
					</div>
					<div className="flex flex-column justify-content-between h-full px-2">
						<ul className="pb-2 m-0 flex flex-column gap-3 pl-3">
							{getContentLinks(intl)?.map(({ href, title, icon }) =>
								<MenuItem
									icon={icon}
									href={href}
									title={title}
									key={title}
									handleClick={handleCloseSidebar}
								/>)
							}
						</ul>
						<div>
							<Button
								onClick={handleLogOut}
								label={intl.formatMessage({id: "template.signOut"})}
								icon="pi pi-sign-out"
							/>
							<div className="flex justify-content-start align-items-center gap-2 mt-4">
								<Typography type={TypographyEnum.SUBTITLE1}>
									<FormattedMessage id="poweredBy" />
								</Typography>
								<ExtrawestIcon />
							</div>
						</div>
					</div>
				</div>
			</PrimarySidebar>
		</div>
	);
};

export default Sidebar;
