import { BASE } from "./base";
import { TOKENS } from "./tokens";
import { expandInlineShortcuts } from "../../lib";

export const GLOBALS = {
	...BASE,
	":root": { ...expandInlineShortcuts(TOKENS) },
};
