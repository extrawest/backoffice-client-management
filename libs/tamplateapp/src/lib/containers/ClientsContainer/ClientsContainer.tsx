import { FC } from "react";
import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import {
	contentSx,
	textFieldSx,
	wrapperSx
} from "./ClientsContainer.styles";
import { Search } from "@mui/icons-material";
import TextField from "../../components/common/TextField/TextField";

export const ClientsContainer: FC = () => {
	const intl = useIntl();

	return (
		<Box sx={wrapperSx}>
			<TextField
				sx={textFieldSx}
				type="email"
				name="email"
				title=""
				startIcon={<Search />}
				placeholder={intl.formatMessage({id: "search"})}
				variant="filled"
				color="primary"
			/>
			<Box sx={contentSx}>
				<Typography
					variant="h5"
					sx={{ width: "calc(100% - 240px)" }}
				>
					{intl.formatMessage({
						id: "template.clients",
						defaultMessage: "Clients"
					})}
				</Typography>
			</Box>
		</Box>
	);
};
