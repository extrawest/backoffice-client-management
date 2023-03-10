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
			className={`${size === "large" ? "w-40rem h-40rem" : "w-6rem h-6rem"} ${rounded ? "border-circle" : "" } overflow-hidden shadow-2 flex justify-content-center align-items-center`}
		>
			<PrimeImage
				src={src ?? blankPhoto}
				imageClassName="w-full h-auto"
				className="w-full h-full flex justify-content-center align-items-center"
				alt="pic"
			/>
		</div>
	);
};
