import React from "react";
import { Box } from ".";
import { texts } from "../sys/tokens";

export const Link = ({
	href = "/#",
	children,
	variant = "default",
	iconOnly,
	onClick,
	sc,
	...props
}) => {
	const base = {
		cursor: "pointer",
		transitionProperty: "color, box-shadow",
		transitionDuration: "--d-default",
		boxShadow: "--sh-outline-off",
	};

	const focusBase = { outline: "none", boxShadow: "--sh-outline-on" };

	const variants = {
		default: {
			fg: "inherit",
		},

		primary: {
			fg: "--c-brand-700",
			"& path": {
				stroke: "--c-brand-700",
			},
			":hover": {
				fg: "--c-brand-800",
				"& path": {
					stroke: "--c-brand-800",
				},
			},
			":focus": {
				fg: "--c-brand-800",
				...focusBase,
				"& path": {
					stroke: "--c-brand-800",
				},
			},
		},

		secondary: {
			fg: "--c-black-900",
			"& path": {
				stroke: "--c-black-900",
			},
			":hover": {
				fg: "--c-black-700",
				"& path": {
					stroke: "--c-black-700",
				},
			},
			":focus": {
				fg: "--c-black-800",
				...focusBase,
				"& path": {
					stroke: "--c-black-800",
				},
			},
		},

		tertiary: {
			fg: "--c-black-700",
			"& path": {
				stroke: "--c-black-700",
			},
			":hover": {
				fg: "--c-black-900",
				"& path": {
					stroke: "--c-black-900",
				},
			},
			":focus": {
				fg: "--c-black-900",
				...focusBase,
				"& path": {
					stroke: "--c-black-900",
				},
			},
		},
	};

	return (
		<Box
			as="a"
			href={href}
			onClick={onClick}
			sc={{
				display: "flex",
				flexes: "rcc",
				gap: 8,
				...base,
				...variants[variant],
				...texts[250],
				...sc,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};
