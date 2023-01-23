import { Box } from "@mui/material";
import { FC } from "react";
import { EmptyTableWrapperType } from "./EmptyTableWrapper.types";

export const EmptyTableWrapper: FC<EmptyTableWrapperType> = ({children}) => (
  <Box
		sx={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%"
		}}
  >
    {children}
  </Box>
);
