import React, { useState } from "react";
import { Box, Flex } from ".";
import { texts } from "../sys/tokens";

export const Input = ({
	size = "regular",
	variant = "primary",
	placeholder = "Enter...",
	iconLeft,
	iconRight,
	onClick,
	sc,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const base = {
		cursor: "pointer",
		transitionProperty: "background, box-shadow",
		transitionDuration: "--d-default",
		bc: "--c-white-900",
		boxShadow: "--sh-outline-off",
	};

	const sizes = {
		regular: {
			py: 8,
		},
		small: {
			px: 8,
			py: 6,
		},
	};

	const variants = {
		primary: {
			fg: "--c-black-500",
			bg: "--c-black-200",
			"& path": {
				stroke: "--c-black-400",
			},
			":hover": {
				fg: "--c-black-600",
				bg: "--c-black-100",
			},
		},
	};

	const handleFocus = () => {
		return isFocused
			? {
					fg: "--c-black-900",
					bg: "var(--c-white-900) !important",
					boxShadow: "--sh-outline-on",
			  }
			: null;
	};

	return (
		<Flex
			{...props}
			sc={{
				display: "flex",
				flexes: "rsc",
				gap: 8,
				px: 12,
				...base,
				...variants[variant],
				...handleFocus(),
				...sc,
			}}
		>
			{iconLeft}
			<Box
				as="input"
				placeholder={placeholder}
				onClick={onClick}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				sc={{
					w: "100%",
					":focus": {
						outline: "none",
					},
					...sizes[size],
					...texts[200],
				}}
			/>
			{iconRight}
		</Flex>
	);
};
