interface TypeFunc {
	(val: any): boolean;
}

/* What type */
export const isVar: TypeFunc = (val) => val[0].match("-") && val[1].match("-");
export const isMedia = (key: string, prefix: string): boolean =>
	key[0].match(prefix) ? true : false;
export const isNum: TypeFunc = (val) => typeof val === "number";
export const isNullish: TypeFunc = (val) => val === null || val === undefined;
export const isObj: TypeFunc = (val) => typeof val === "object" && val !== null;
