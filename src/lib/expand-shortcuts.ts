import { mappings } from "./mappings";
import { isMedia, isObj, setProperty } from ".";
import { createMediaQueries } from ".";
import { breakpoints } from "../components/sys/tokens";

const mq = createMediaQueries(breakpoints);

/***
	Expand property and media query shortcuts.
	{
		fg: "red",
		_lg: { background: "blue" }
	}
	→
	{
		color: "red",
		"@media screen and (min-width: ${val}px)": { background: "blue" }
	}
***/

export const expandInlineShortcuts = (obj: {} | null): {} | null => {
	return expandPropertyShortcuts(expandMediaShortcuts(obj));
};

/* Expand shortcuts */
export const expandPropertyShortcuts = (obj: {} | null) => {
	if (!obj) return null;

	const asArray = Object.entries(obj);
	let acc: {} = {};

	asArray.map((prop: {}) => {
		const key = prop[0];
		const value = prop[1];
		// find matched shortcuts
		const match = mappings.find((i) => i.key === key);
		// if found, convert
		if (match) {
			acc = { ...acc, ...match.value(value) };
		}

		if (!match) {
			// if has children, repeat
			if (isObj(value)) {
				acc = { ...acc, [key]: expandPropertyShortcuts(value) };
			} else {
				return (acc = { ...acc, ...setProperty(key, value) });
			}
		}
	});
	return acc;
};

/* Expand media query shortcuts */
const expandMediaShortcuts = (props: {} | null): {} | null => {
	if (!props) return null;
	const { prefix, bps } = mq;

	const receivedMedia = Object.entries(props)
		.slice(0)
		.filter(([key, _value]) => isMedia(key, prefix))
		.map((obj) => {
			const key = bps[obj[0]];
			const value = { ...[obj[1]] };
			return [key, value[0]];
		});

	const receivedProps = Object.entries(props)
		.slice(0)
		.filter((obj) => obj)
		.filter(([key, _value]) => !isMedia(key, prefix))
		.map((arr) => {
			const key = arr[0];
			const value = arr[1];
			return [key, value];
		});

	if (receivedMedia.length !== 0 || receivedProps.length !== 0) {
		const res = [...receivedMedia, ...receivedProps];
		// debug:
		// console.log(...res);
		return Object.fromEntries(res);
	} else return null;
};
