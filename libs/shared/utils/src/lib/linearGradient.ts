
export const linearGradient = (
	degree: number,
	startColor: string,
	startPercent: number,
	endColor: string,
	endPercent: number
) => (`linear-gradient(${degree}deg, ${startColor} ${startPercent}%, ${endColor} ${endPercent}%)`);
