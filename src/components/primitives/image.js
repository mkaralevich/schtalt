import { css } from "@emotion/react";
import { Box } from "./box";

export const Image = ({ src, alt, sc, ...props }) => (
	<Box as="image" src={src} alt={alt} sc={{ ...sc }} {...props} />
);
