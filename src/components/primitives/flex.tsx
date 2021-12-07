import React from "react";
import { setFlexGroup } from "../../lib";
import { Box } from "./box";

type Props = {
	flexes?: string;
	gap?: number;
	sc?: {};
	__ref?: HTMLElement;
};

export const Flex = React.forwardRef<HTMLElement, Props>(
	({ flexes = "rss", gap = 0, sc, ...props }, ref) => (
		<Box
			__ref={ref}
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
