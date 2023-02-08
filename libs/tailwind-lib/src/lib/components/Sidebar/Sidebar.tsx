import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { LogOutIcon } from "../../icons";
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

export const Sidebar: FC = () => {
	const intl = useIntl();
	const dispatch: AppDispatch = useTypedDispatch();
	const navigate = useNavigate();

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const handleLogOut = () => {
		// logout logic...
		dispatch(updateIsLoggedIn(false));
		navigate(AppRouteEnum.LOGIN);
	};

	return (
		<div className="w-60 h-vh-90 flex flex-col justify-start shrink-0 text-grayscale-800 outline-none">
			<div className="mb-6 flex flex-col">
				<Image
					size="large"
					rounded
				/>
				<div className="flex flex-col items-start">
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
			<div className="flex flex-col justify-between h-full">
				<ul className="pb-2 m-0 flex flex-col gap-3 ">
					{getContentLinks(intl)?.map(({ href, title, icon }) =>
						<MenuItem
							icon={icon}
							href={href}
							title={title}
							key={title}
						/>)
					}
				</ul>
				<Button
					onClick={handleLogOut}
					extraClasses="flex items-center gap-6 px-4 py-2"
				>
					<LogOutIcon
						size={20}
						className="overflow-visible"
						fill="white"
					/>
					<Typography>
						<FormattedMessage id="template.signOut"/>
					</Typography>
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
