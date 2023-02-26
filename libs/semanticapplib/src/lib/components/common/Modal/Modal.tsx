
import { FC } from "react";
import {
	Modal as SemanticModal,
	ModalContent,
	ModalHeader
} from "semantic-ui-react";
import { TypographyEnum } from "../../../types/typography";
import { IconButton } from "../IconButton/IconButton";
import { Typography } from "../Typography/Typography";
import { modalStyles } from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal: FC<ModalProps> = ({title, open, handleClose, children}) => {
	return (
		<SemanticModal
			open={open}
			onClose={handleClose}
		>
			{title &&
          <ModalHeader style={modalStyles.header}>
            <Typography
							textAlign="start"
							type={TypographyEnum.H5}
            >
              {title}
            </Typography>
            <IconButton
							onClick={handleClose}
							icon="close"
            />
          </ModalHeader>
      }
				<ModalContent>
					{children}
				</ModalContent>
		</SemanticModal>
	);
};
