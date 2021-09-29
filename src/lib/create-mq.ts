/*
	Create reference media queries from array.

	{prefix: "_", md: 768}
	→ `@media screen and (min-width: 768px)`
	→ {_md: {...}}
*/

export const createMediaQueries = (obj) => {
	const { prefix, ...bp } = obj;
	const bps = Object.fromEntries(
		Object.entries(bp).map(([key, val]) => [
			[`${prefix}${key}`],
			`@media screen and (min-width: ${val}px)`,
		])
	);

	return {
		prefix: prefix,
		bps: bps,
	};
};
