import { updateIsLoggedIn, updateManager } from "@mono-redux-starter/redux";
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";
import {
	AppDispatch,
	useTypedDispatch,
	useTypedSelector
} from "../../store";
import { AppRouteEnum } from "../../types";
import { Image } from "../common/Image/Image";
import { MenuItem } from "../common/MenuItem/MenuItem";
import { getContentLinks } from "./Sidebar.menu";
import { AlignLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import {
	commonWhite,
	grayscale600
} from "@mono-redux-starter/shared/color";
import {
	Button,
	Col,
	Divider,
	Drawer,
	Menu,
	MenuProps,
	Row,
	Space
} from "antd";
import { TypographyTitle } from "../common/TypographyTitle/TypographyTitle";
import { TypographyParagraph } from "../common/TypographyParagraph/TypographyParagraph";
import { useEffect } from "react";
import { ItemType } from "antd/es/menu/hooks/useItems";

export const Sidebar: FC = () => {
	const intl = useIntl();
	const dispatch: AppDispatch = useTypedDispatch();
	const navigate = useNavigate();
	const [visible, setVisible] = useState<boolean>(false);
	const location = useLocation();
	const [currentMenuItem, setCurrentMenuItem] = useState<string>("/");

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const handleLogOut = () => {
		// logout logic...
		dispatch(updateManager(undefined));
		dispatch(updateIsLoggedIn(false));
		navigate(AppRouteEnum.LOGIN);
	};

	const handleOpenSidebar = () => {
		setVisible(true);
	};

	const handleCloseSidebar = () => {
		setVisible(false);
	};

	const hadnleChangeCurrentMenuItem: MenuProps["onClick"] = e => {
		setCurrentMenuItem(e.key);
	};

	useEffect(
		() => {
			setCurrentMenuItem(location.pathname);
		},
		[location]
	);

	return (
		<>
			<Button
				onClick={handleOpenSidebar}
				style={{ width: "100%", height:"100%", padding: "0 4px" }}
			>
				<AlignLeftOutlined style={{fontSize: "1.2rem", color: grayscale600}}/>
			</Button>
			<Drawer
				width={300}
				open={visible}
				placement="left"
				onClose={handleCloseSidebar}
				closable={false}

			>
				<Row
					gutter={[8,16]}
					align="top"
					className="flex flex-col justify-between"
					style={{height: "100%"}}
				>
					<Row
						justify="start"
						align={"middle"}
					>
						<Col span={24}>
							<Image
								width={200}
								rounded
							/>
						</Col>
						<Col span={24}>
							<TypographyTitle
								level={4}
							>
								{managerInfo ? `${managerInfo["firstName"]} ${managerInfo["lastName"]}` : "John Doe"}
							</TypographyTitle>
							<TypographyParagraph textAlign="start">
								Admin
							</TypographyParagraph>
						</Col>
					</Row>
					<Row
						gutter={[8,16]}
						justify="start"
						align={"middle"}
						style={{width: "100%"}}

					>
						<Menu
							selectedKeys={[currentMenuItem]}
							mode="vertical"
							style={{
								width: "100%",
								border: "none",
								boxShadow: "none"
							}}
							items={getContentLinks(intl)?.map(({ href, title, icon }): ItemType => (
									{
										label: (
											<MenuItem
												icon={icon}
												href={href}
												title={title}
												key={title}
												handleClick={handleCloseSidebar}
											/>
										),
										key: href
									}))}
						/>
						{
							}
					</Row>
					<Button
						onClick={handleLogOut}
						type="primary"
						style={{
							marginTop: "auto",
						}}
					>
						<Row
							gutter={[-10, 16]}
							align={"middle"}
						>
							<LogoutOutlined style={{fontSize: "1.5rem", color: commonWhite}}/>
							<Divider
								type="vertical"
							/>
							<TypographyParagraph
								textAlign="start"
								// strong
								style={{
									margin: 0,
									color: commonWhite
								}}
							>
								{intl.formatMessage({id: "template.signOut"})}
							</TypographyParagraph>
						</Row>
					</Button>
				</Row>
			</Drawer>
		</>
	);
};

export default Sidebar;
