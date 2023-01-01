import { AppRouteTitleEnum } from "../../../types/paths";
import { ContentElementType } from "./DashboardField.types";

export const dashboardContent: Array<ContentElementType> = [
	{
		key: "unit",
		title: AppRouteTitleEnum.CLIENTS,
		quantity: 0,
		link: "/clients"
	},
];
