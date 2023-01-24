export const mergeStrings = (
	first_string: string,
	last_string?: string
) => {
	return last_string ? first_string + " " + last_string : first_string;
};
