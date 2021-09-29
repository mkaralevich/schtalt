import { mq } from "../components/sys/tokens";

/*
	Map object props to media queries:

	input:
	<media>: {<props>}
	output:
	mq[<media>]: {<props>}
*/

export const getObjectMedia = (props) => {
	if (!props) return null;
	/* Merge objects */
	return Object.assign(
		/* Map <media> to <mq.media> */
		...Object.entries(props).map((mediaQueryArr) => {
			const key = mq[mediaQueryArr[0]];
			const value = { ...[mediaQueryArr[1]] };

			// if mediaQueryArr[0].match("_") return ""

			return { [key]: value[0] };
		})
	);
};
