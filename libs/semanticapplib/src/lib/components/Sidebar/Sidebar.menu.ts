import { IntlShape } from "react-intl";
import {
	DashboardIcon,
	TeamIcon,
	OffersIcon,
	PartnersIcon,
	FinancesIcon,
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
		href: AppRouteEnum.TEAM,
		icon: TeamIcon,
		title: intl.formatMessage({
			id: "template.team",
			defaultMessage: "Team"
		})
	},
	{
		href: AppRouteEnum.OFFERS,
		icon: OffersIcon,
		title: intl.formatMessage({
			id: "template.offers",
			defaultMessage: "Offers"
		})
	},
	{
		href: AppRouteEnum.PARTNERS,
		icon: PartnersIcon,
		title: intl.formatMessage({
			id: "template.partners",
			defaultMessage: "Partners"
		})
	},
	{
		href: AppRouteEnum.FINANCES,
		icon: FinancesIcon,
		title: intl.formatMessage({
			id: "template.finances",
			defaultMessage: "Finances"
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
