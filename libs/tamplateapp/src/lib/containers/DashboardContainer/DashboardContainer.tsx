import {
	Box,
	Typography,
	Grid
} from "@mui/material";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { ChartWrapper } from "../../components/common/ChartWrapper/ChartWrapper";
import { commonContainers } from "../commonContainers.styles";

export const DashboardContainer: FC = () => (
	<Box>
		<Box sx={commonContainers["titleWrapperSx"]}>
			<Typography
				variant="h5"
				sx={{ width: "calc(100% - 240px)" }}
			>
				<FormattedMessage id="template.dashboard" />
			</Typography>
		</Box>
		<Grid
			container
			rowSpacing={4}
			columnSpacing={2}
		>
			<Grid
				item
				xs={12}
			>
				<Box
					sx={commonContainers["gridItem"]}
				>
					<ChartWrapper />
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
			>
				<Box
					sx={commonContainers["gridItem"]}
				>
					xs=6
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
			>
				<Box
					sx={commonContainers["gridItem"]}
				>
					xs=6
				</Box>
			</Grid>
		</Grid>
	</Box>
);
