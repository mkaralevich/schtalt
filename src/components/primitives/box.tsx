import React from "react";
import { css } from "@emotion/react";
import { expandInlineShortcuts, expandPropertyShortcuts } from "../../lib";

export const Box = React.forwardRef(
	(
		{
			/* utils */
			as: Component,
			css: __css,
			sc,
			/* basics */
			bg,
			fg,
			w,
			minw,
			maxw,
			h,
			minh,
			maxh,
			s,
			mins,
			maxs,
			/* spacing */
			p,
			pt,
			pr,
			pb,
			pl,
			py,
			px,
			m,
			mt,
			mr,
			mb,
			ml,
			my,
			mx,
			/* borders */
			b,
			bt,
			br,
			bb,
			bl,
			bc,
			ra,
			pos,
			z,
			/* more */
			fill,
			stroke,
			...props
		},
		__ref
	) => {
		const shortcuts = {
			bg,
			fg,
			w,
			minw,
			maxw,
			h,
			minh,
			maxh,
			s,
			mins,
			maxs,
			p,
			pt,
			pr,
			pb,
			pl,
			py,
			px,
			m,
			mt,
			mr,
			mb,
			ml,
			my,
			mx,
			b,
			bt,
			br,
			bb,
			bl,
			bc,
			ra,
			pos,
			z,
			fill,
			stroke,
		};

		return (
			<Component
				ref={__ref}
				css={{
					/* reset */
					boxSizing: "border-box",
					"&::before, &::after": { boxSizing: "inherit" },
					appearance: "none",
					margin: 0,
					padding: 0,
					border: 0,
					minWidth: 0,
					borderRadius: 0,
					background: "none",
					font: "inherit",
					color: "inherit",
					textAlign: "inherit",
					textDecoration: "none",
					/* shortcuts */
					...expandPropertyShortcuts(shortcuts),
					...expandInlineShortcuts(sc),
					...__css,
				}}
				{...props}
			/>
		);
	}
);

Box.displayName = "Box";
Box.defaultProps = {
	as: "div",
};
