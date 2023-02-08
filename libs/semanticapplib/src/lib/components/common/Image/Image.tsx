import { FC } from "react";
import { ImageProps } from "./Image.types";
import blankPhoto from "../../../images/blank-photo.jpg";
import { imageStyle } from "./Image.styles";

export const Image: FC<ImageProps> = ({
	src,
	size = "large",
	rounded
}) => {

	return (
		<div
			style={imageStyle.wrapper(
				size,
				rounded
			)}
		>
			<img
				src={src ?? blankPhoto}
				style={imageStyle.img}
				alt="pic"
			/>
		</div>
	);
};
