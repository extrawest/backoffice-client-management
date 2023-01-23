import { FC } from "react";
import { Close } from "@mui/icons-material";
import {
	DialogTitle,
	Dialog,
	DialogContent,
	Box,
	IconButton,
} from "@mui/material";
import { ModalProps } from "./Modal.types";
import {
	headerSx, rootSx, contentSx, titleSx
} from "./Modal.styles";
import React from "react";

export const Modal: FC<ModalProps> = ({
	handleClose,
	open,
	children,
	title,
	type,
	fullWidth,
	withoutPaddings = false
}) => {
	return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={rootSx}
      maxWidth={type ?? "lg"}
      fullWidth={fullWidth ?? false}
    >
      {title &&
          <Box sx={headerSx}>
            <DialogTitle sx={titleSx}>
              {title}
            </DialogTitle>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
      }
      <DialogContent
        sx={contentSx(withoutPaddings)}
      >
        {children}
      </DialogContent>
    </Dialog>
	);
};
