import React from "react";
import { texts } from "../sys/tokens";

export const Button = ({
	children,
	size = "regular",
	variant = "primary",
	loading = false,
	disabled = false,
	iconOnly,
	onClick,
	sc,
	...props
}) => {
	const base = {
		cursor: "pointer",
		transitionProperty: "background, box-shadow, color",
		transitionDuration: "--d-default",
		boxShadow: "--sh-outline-off",
	};

	const sizes = {
		regular: {
			px: iconOnly ? 8 : 12,
			py: 8,
		},
		small: {
			px: iconOnly ? 6 : 8,
			py: 6,
		},
	};

	const focusBase = { outline: "none", boxShadow: "--sh-outline-on" };

	const variants = {
		blank: {
			fg: "--c-fg-secondary",
			bg: "--c-none",
		},

		disabled: {
			fg: "--c-black-500",
			bg: "--c-black-200",
			cursor: "not-allowed",
			"& path": {
				stroke: "--c-black-500",
			},
			":focus": {
				outline: "none",
			},
		},

		primary: {
			fg: "--c-brand-400",
			bg: "--c-black-900",
			"& path": {
				stroke: "--c-brand-400",
			},
			":hover": {
				fg: "--c-brand-400",
				bg: "--c-brand-900",
			},
			":focus": {
				fg: "--c-brand-400",
				bg: "--c-brand-900",
				...focusBase,
			},
		},

		secondary: {
			fg: "--c-black-900",
			bg: "--c-black-200",
			"& path": {
				stroke: "--c-black-900",
			},
			":hover": {
				fg: "--c-black-900",
				bg: "--c-black-300",
			},
			":focus": {
				...focusBase,
			},
		},

		tertiary: {
			fg: "--c-black-900",
			bg: "--c-none",
			"& path": {
				stroke: "--c-black-900",
			},
			":hover": {
				fg: "--c-black-900",
				bg: "--c-black-300",
			},
			":focus": {
				...focusBase,
			},
		},

		secondaryPositive: {
			fg: "--c-brand-800",
			bg: "--c-brand-100",
			"& path": {
				stroke: "--c-brand-800",
			},
			":hover": {
				fg: "--c-white-900",
				bg: "--c-brand-800",
				"& path": {
					stroke: "--c-white-900",
				},
			},
			":focus": {
				fg: "--c-white-900",
				bg: "--c-brand-800",
				...focusBase,
				"& path": {
					stroke: "--c-white-900",
				},
			},
		},

		secondaryNegative: {
			fg: "--c-negative-800",
			bg: "--c-negative-100",
			"& path": {
				stroke: "--c-negative-800",
			},
			":hover": {
				fg: "--c-white-900",
				bg: "--c-negative-800",
				"& path": {
					stroke: "--c-white-900",
				},
			},
			":focus": {
				fg: "--c-white-900",
				bg: "--c-negative-800",
				...focusBase,
				"& path": {
					stroke: "--c-white-900",
				},
			},
		},
	};

	const setVariant = (variant) => {
		if (disabled || loading) return "disabled";
		else return variant;
	};

	return (
		<Box
			onClick={onClick}
			sc={{
				display: "flex",
				flexes: "rcc",
				gap: 8,
				...sizes[size],
				...base,
				...variants[setVariant(variant)],
				...texts[250],
				...sc,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};
