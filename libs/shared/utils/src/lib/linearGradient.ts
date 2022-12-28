
export const linearGradient = (
	degree: number,
	startPercent: number,
	endPercent: number,
	startColor = "#2F80ED",
	endColor = "#293780",
) => (`linear-gradient(${degree}deg, ${startColor} ${startPercent}%, ${endColor} ${endPercent}%)`);
