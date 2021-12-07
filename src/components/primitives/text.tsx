import { Box } from "./box";
import { texts } from "../sys/tokens";

type Props = {
	as?: string;
	sc?: {};
	t?: string;
};

export const Text = ({ t = texts[0], as = "p", sc, ...props }: Props) => (
	<Box as={as} sc={{ ...texts[t], ...sc }} {...props} />
);
