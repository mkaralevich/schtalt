import { isVar, isNum, isNullish } from ".";

/* Variables are set with prefix `-` */
const Var = (val) => `var(${val})`;

export const setProperty = (key, val) => {
	if (isNullish(val)) return null;

	// if (isNum(val) && valueGroups.px.indexOf(key) && val !== 0)
	// 	return { [key]: `${val}px` };
	if (isNum(val)) return { [key]: val };
	if (isVar(val)) return { [key]: Var(val) };
	return { [key]: val };
};

const valueGroups = {
	px: [
		"width",
		"maxWidth",
		"minWidth",
		"height",
		"minHeight",
		"maxHeight",
		"top",
		"right",
		"bottom",
		"left",
		"margin",
		"marginTop",
		"marginRight",
		"marginBottom",
		"marginLeft",
		"padding",
		"paddingTop",
		"paddingRight",
		"paddingBottom",
		"paddingLeft",
		"gap",
		"border",
		"borderTop",
		"borderRight",
		"borderBottom",
		"borderLeft",
		"borderRadius",
		"fontSize",
		"lineHeight",
	],
};
