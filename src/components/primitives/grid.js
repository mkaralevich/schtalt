import React from "react";
import { Box } from "./box";

export const Grid = React.forwardRef(
	({ gap = 0, col = 1, rows = 1, sc, __ref, ...props }, ref) => (
		<Box
			__ref={__ref}
			sc={{
				display: "grid",
				gap: gap,
				gridTemplateColumns: `repeat(${col}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				...sc,
			}}
			{...props}
		/>
	)
);

Grid.displayName = "Grid";
