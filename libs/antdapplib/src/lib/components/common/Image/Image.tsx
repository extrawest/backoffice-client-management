import { FC } from "react";
import blankPhoto from "../../../images/blank-photo.jpg";
import { Image as AntImage } from "antd";
import { ImageProps } from "./Image.types";

export const Image: FC<ImageProps> = ({
	src,
	rounded,
	...rest
}) => {

	return (
		<AntImage
			src={src ?? blankPhoto}
			alt="pic"
			style={{
				borderRadius: rounded ? "50%" : "2px",
				boxShadow: "0 0 10px rgb(0,0,0,0.5)"
			}}
			{...rest}
		/>
	);
};
