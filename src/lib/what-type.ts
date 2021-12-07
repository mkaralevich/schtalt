interface TypeFunc {
	(val: string | unknown): boolean;
}

/* What type */
export const isVar: TypeFunc = (val: string) =>
	val[0] === "-" && val[1] === "-";
export const isMedia = (key: string, prefix: string): boolean =>
	key[0] === prefix;
export const isNum: TypeFunc = (val) => typeof val === "number";
export const isNullish: TypeFunc = (val) => val === null || val === undefined;
export const isObj: TypeFunc = (val) => typeof val === "object" && val !== null;
