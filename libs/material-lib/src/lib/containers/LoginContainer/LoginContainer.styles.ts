import { Theme } from "@mui/material";
import { SxStyles } from "../../types/styles";

export const styles: SxStyles = {
	pageWrapper: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "background.paper",
		gap: (theme: Theme) => theme.spacing(10/8)
	}
};
