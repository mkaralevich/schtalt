import { Box } from "./box";
import { texts } from "../sys/tokens";

export const Text = ({ t, as = "p", sc, ...props }) => (
	<Box as={as} sc={{ ...texts[t], ...sc }} {...props} />
);
