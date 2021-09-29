export * from "./components/primitives";

interface Props {
	(a: number, b: number): number;
}

export const sum: Props = (a, b) => {
	return a + b;
};
