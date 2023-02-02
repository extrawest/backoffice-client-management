import { CalendarProps } from "primereact/calendar";
import { InputTextProps } from "primereact/inputtext";
import { ReactNode } from "react";

export type FormikCalendarProps = Omit<CalendarProps, "name"> & {
	name: string
};
