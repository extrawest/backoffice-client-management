import { Box } from "@mui/material";
import { FC } from "react";
import { useStyles } from "./Image.styles";
import { ImageProps } from "./Image.types";
import blankPhoto from "../../../images/blank-photo.jpg";

export const Image: FC<ImageProps> = ({
	src,
	size,
	rounded
}) => {
	return (
		<Box
			sx={useStyles.imageSx(
				size,
				rounded
			)}
		>
			<img
				src={src ?? blankPhoto}
				alt="pic"
			/>
		</Box>
	);
};
