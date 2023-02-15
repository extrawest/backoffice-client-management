import { IntlShape } from "react-intl";
import {
	DashboardIcon,
	ClientsIcon
} from "../../icons";
import { AppRouteEnum } from "../../types";
import { MenuItemProps } from "../common/MenuItem/MenuItem.types";

export const getContentLinks = (intl: IntlShape): Array<MenuItemProps> => [
	{
		href: AppRouteEnum.DASHBOARD,
		icon: DashboardIcon,
		title: intl.formatMessage({
			id: "template.dashboard",
			defaultMessage: "Dashboard"
		})
	},
	{
		href: AppRouteEnum.CLIENTS,
		icon: ClientsIcon,
		title: intl.formatMessage({
			id: "template.clients",
			defaultMessage: "Clients"
		})
	},
];
