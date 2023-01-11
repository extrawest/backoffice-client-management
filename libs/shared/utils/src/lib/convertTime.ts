export const convertToDate = (value: number | string) => {
	const date = new Date(+value * 1000);
	return date.toLocaleDateString("fr-CH");
};

export const convertToDateTime = (value: number | string) => {
	const dateTime = new Date(+value * 1000);
	return {
		date: dateTime.toLocaleDateString("fr-CH"),
		time: dateTime.toLocaleTimeString(
			"fr-CH",
			{second: undefined}
		)
	};
};
