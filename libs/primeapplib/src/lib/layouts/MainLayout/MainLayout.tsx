import { FC, useState } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useIntl } from "react-intl";
import { SearchIcon } from "../../icons";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const intl = useIntl();
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const fieldText = intl.formatMessage({id: "search"});

	return (
		<div
			className="flex overflow-hidden h-screen"
		>
			<div className="w-96 shadow-md shadow-secondary-main flex justify-content-center align-items-center sticky">
				<Sidebar />
			</div>
			<div
				className="xs:mt-12 mt-0 w-full overflow-x-hidden p-4"
				id="pageWrap"
			>
				<div className="max-w-30rem w-full p-2 flex gap-2 border-1 border-solid border-grayscale-200 rounded-50">
					<SearchIcon />
					<input
						type="text"
						id="search"
						name="search"
						className="w-full text-lg font-medium outline-none text-grayscale-600"
						placeholder={fieldText}
					/>
				</div>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
