import React from "react";
import { Flex, Text } from ".";

export const Label = ({ variant = "accent", children }) => {
	const variants = {
		neutral: {
			bg: "--c-black-300",
			fg: "--c-black-700",
		},
		positive: {
			bg: "--c-brand-800",
			fg: "--c-white-900",
		},
		negative: {
			bg: "--c-negative-700",
			fg: "--c-white-900",
		},
		warning: {
			bg: "--c-warning-700",
			fg: "--c-fg-primary",
		},
	};

	return (
		<Flex px={8} py={4} flexes="rcc" bg={variants[variant].bg}>
			<Text t="50" fg={variants[variant].fg}>
				{children}
			</Text>
		</Flex>
	);
};
