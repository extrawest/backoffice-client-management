import { FC, useState } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useIntl } from "react-intl";
import { SearchIcon } from "../../icons";
import {
	Container,
	Input,
	Menu,
	Segment,
	Sidebar as SemanticSidebar,
	SidebarPushable,
	SidebarPusher
} from "semantic-ui-react";
import { IconButton } from "../../components/common/IconButton/IconButton";
import { mainLayoutStyles } from "./MainLayout.styles";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const intl = useIntl();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const fieldText = intl.formatMessage({id: "search"});

	return (
		<Container fluid style={mainLayoutStyles.layoutContainer}>
			<IconButton
				icon="content"
				onClick={handleOpen}
			/>
			<SemanticSidebar.Pushable style={{width: "100%", position: "sticky"}}>
				<SemanticSidebar
					as={Menu}
					visible={open}
					animation="push"
					onHide={handleClose}
					direction="left"

					vertical
					width='wide'
				>
					<Sidebar
						handleClose={handleClose}
					/>
				</SemanticSidebar>
				<SemanticSidebar.Pusher>
					<Container
						fluid
						className="pageLayout"
						style={mainLayoutStyles.content}
					>
						<div className="max-w-30rem w-full p-2 flex gap-2 border-1 border-solid border-gray-400 border-round-half ml-6">
							<Input
								type="text"
								id="search"
								name="search"
								icon="search"
								iconPosition="left"
								style={mainLayoutStyles.seachInput}
								placeholder={fieldText}
							/>
						</div>
						{children}
					</Container>
				</SemanticSidebar.Pusher>
			</SemanticSidebar.Pushable>
		</Container>
	);
};

export default MainLayout;
