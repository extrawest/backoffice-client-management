import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { EmptyTableWrapper } from "../EmptyTableWrapper/EmptyTableWrapper";
import { HourglassEmpty } from "@mui/icons-material";

export const EmptyTable: FC = () => (
  <EmptyTableWrapper>
    <Typography variant="subtitle1">
      <Stack sx={{ py: 2, alignItems: "center" }}>
        <HourglassEmpty />
        <FormattedMessage id="noData" />
      </Stack>
    </Typography>
  </EmptyTableWrapper>
);
