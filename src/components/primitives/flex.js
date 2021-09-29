import React from "react";
import { setFlexGroup } from "../../lib";
import { Box } from "./box";

export const Flex = React.forwardRef(
	({ flexes, gap = 0, sc, __ref, ...props }, ref) => (
		<Box
			__ref={__ref}
			sc={{
				display: "flex",
				gap: gap,
				...setFlexGroup(flexes),
				...sc,
			}}
			{...props}
		/>
	)
);

Flex.displayName = "Flex";
