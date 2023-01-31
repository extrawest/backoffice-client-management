import { FC } from "react";
import { ImageProps } from "./Image.types";
import blankPhoto from "../../../images/blank-photo.jpg";
import { Image as PrimeImage } from "primereact/image";

export const Image: FC<ImageProps> = ({
	src,
	size,
	rounded
}) => {

	return (
		<div
			className={`${size === "large" ? "w-40rem h-40rem" : "w-12rem h-12rem"} ${rounded ? "border-circle" : "" } overflow-hidden shadow-md flex justify-content-center align-items-center`}
		>
			<PrimeImage
				src={src ?? blankPhoto}
				width="100%"
				alt="pic"
			/>
		</div>
	);
};
