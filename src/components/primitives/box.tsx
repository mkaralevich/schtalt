import { forwardRef } from "react";
import { expandInlineShortcuts, expandPropertyShortcuts } from "../../lib";

type CSS = number | string | null;

type Props = {
	as?: any;
	css?: {};
	sc?: {};
	bg?: CSS;
	fg?: CSS;
	w?: CSS;
	minw?: CSS;
	maxw?: CSS;
	h?: CSS;
	minh?: CSS;
	maxh?: CSS;
	s?: CSS;
	mins?: CSS;
	maxs?: CSS;
	p?: CSS;
	pt?: CSS;
	pr?: CSS;
	pb?: CSS;
	pl?: CSS;
	py?: CSS;
	px?: CSS;
	m?: CSS;
	mt?: CSS;
	mr?: CSS;
	mb?: CSS;
	ml?: CSS;
	my?: CSS;
	mx?: CSS;
	/* borders */
	b?: CSS;
	bt?: CSS;
	br?: CSS;
	bb?: CSS;
	bl?: CSS;
	bc?: CSS;
	ra?: CSS;
	pos?: CSS;
	z?: CSS;
	/* more */
	fill?: CSS;
	stroke?: CSS;
};

export const Box = forwardRef<HTMLElement, Props>(
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
