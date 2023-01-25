import { FC } from "react";
import { ImageProps } from "./Image.types";
import blankPhoto from "../../../images/blank-photo.jpg";

export const Image: FC<ImageProps> = ({
	src,
	size,
	rounded
}) => {

	return (
		<div
			className={`${size === "big" ? "w-40" : "w-12"} ${rounded ? "rounded-circle" : "" } overflow-hidden shadow-md shadow-secondary-main`}
		>
			<img
				src={src ?? blankPhoto}
				className="w-100% h-100%"
				alt="pic"
			/>
		</div>
	);
};
