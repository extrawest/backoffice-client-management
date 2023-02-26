import { CalendarProps } from "primereact/calendar";

export type FormikCalendarProps = Omit<CalendarProps, "name"> & {
	name: string
};
