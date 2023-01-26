import { FC } from "react";
import { TypographyEnum } from "../../types/typography";
import { IconButton } from "../common/IconButton/IconButton";
import { Typography } from "../common/Typography/Typography";
import { ModalProps } from "./Modal.types";

export const Modal: FC<ModalProps> = ({title, open, handleClose, children}) => {
	return (
		<div className={`${open ? "flex" : "hidden"} fixed w-full h-full top-0 left-0 p-4 items-center justify-center`}>
			<div
				className="absolute w-full h-full bg-grayscale-800 bg-opacity-50 z-0 left-0 top-0"
				onClick={handleClose}
			/>
			<div className="max-w-3xl w-full bg-background z-10 relative rounded-md overflow-hidden">
			{title &&
          <div className="flex justify-between items-center pr-2.5 bg-grayscale-100 border-b-1 border-solid border-grayscale-400">
            <Typography
							type={TypographyEnum.H5}
							extraClasses="px-4 py-2"
            >
              {title}
            </Typography>
            <IconButton
							onClick={handleClose}
							extraClasses="relative w-5 h-5 group"
            >
							<span
								className="rounded-circle w-5 h-5 border-b-2 border-l-2 border-solid border-secondary-main absolute left-0 group-hover:rounded-none group-hover:border-l-0 group-hover:h-0.5 top-2/4 transform -translate-y-2/4 group-hover:rotate-45 transition-all duration-300"
							/>
							<span
								className="rounded-circle w-5 h-5 border-t-2 border-r-2 border-solid border-secondary-main absolute left-0 group-hover:rounded-none group-hover:border-r-0 group-hover:h-0.5 top-2/4 transform -translate-y-2/4 group-hover:-rotate-45 transition-all duration-300"
							/>
            </IconButton>
          </div>
      }
				<div className="pt-3 pb-5">
					{children}
				</div>
			</div>
		</div>
	);
};
