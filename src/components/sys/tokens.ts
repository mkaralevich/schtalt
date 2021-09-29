/* MEDIA QUERIES */
export const breakpoints = {
	prefix: "_",
	xsm: 384,
	sm: 768,
	md: 1024,
	lg: 1280,
	xlg: 1440,
	xxlg: 1536,
	xxxlg: 1920,
};

/* TYPOGRAPHY */
export const texts = {
	/* Responsive */

	250: {
		fontSize: 16,
		lineHeight: "16px",
		fontWeight: 500,
		fontFamily: "var(--ff-sans)",
	},
	200: {
		fontSize: 16,
		lineHeight: "16px",
		fontWeight: "normal",
		fontFamily: "var(--ff-sans)",
	},
	150: {
		fontSize: 12,
		lineHeight: "16px",
		fontWeight: 500,
		fontFamily: "var(--ff-sans)",
	},
	100: {
		fontSize: 12,
		lineHeight: "16px",
		fontWeight: "normal",
		fontFamily: "var(--ff-sans)",
	},
};

/* TOKENS */

export const colors = {
	"--c-black-900": "hsla(0, 0%, 0%, 100%)",
	"--c-black-800": "hsla(0, 0%, 0%, 80%)",
	"--c-black-700": "hsla(0, 0%, 0%, 64%)",
	"--c-black-600": "hsla(0, 0%, 0%, 56%)",
	"--c-black-500": "hsla(0, 0%, 0%, 48%)",
	"--c-black-400": "hsla(0, 0%, 0%, 40%)",
	"--c-black-300": "hsla(0, 0%, 0%, 24%)",
	"--c-black-200": "hsla(0, 0%, 0%, 12%)",
	"--c-black-100": "hsla(0, 0%, 0%, 8%)",

	"--c-white-900": "hsla(255, 100%, 100%, 100%)",
	"--c-white-800": "hsla(255, 100%, 100%, 80%)",
	"--c-white-700": "hsla(255, 100%, 100%, 64%)",
	"--c-white-600": "hsla(255, 100%, 100%, 56%)",
	"--c-white-500": "hsla(255, 100%, 100%, 48%)",
	"--c-white-400": "hsla(255, 100%, 100%, 40%)",
	"--c-white-300": "hsla(255, 100%, 100%, 24%)",
	"--c-white-200": "hsla(255, 100%, 100%, 12%)",
	"--c-white-100": "hsla(255, 100%, 100%, 8%)",

	"--c-accent-900": "hsla(219, 88%, 32%, 100%)",
	"--c-accent-800": "hsla(219, 88%, 32%, 80%)",
	"--c-accent-700": "hsla(219, 88%, 32%, 64%)",
	"--c-accent-600": "hsla(219, 88%, 32%, 56%)",
	"--c-accent-500": "hsla(219, 88%, 32%, 48%)",
	"--c-accent-400": "hsla(219, 88%, 32%, 40%)",
	"--c-accent-300": "hsla(219, 88%, 32%, 24%)",
	"--c-accent-200": "hsla(219, 88%, 32%, 12%)",
	"--c-accent-100": "hsla(219, 88%, 32%, 8%)",
};

const semanticColors = {
	"--c-none": "transparent",
	"--c-fg-primary": "var(--c-black-900)",
	"--c-fg-secondary": "var(--c-black-700)",
	"--c-fg-tertiary": "var(--c-black-500)",
	"--c-fg-primary-inverse": "var(--c-white-900)",
	"--c-fg-secondary-inverse": "var(--c-white-700)",
	"--c-fg-tertiary-inverse": "var(--c-white-600)",
	"--c-border": "var(--c-black-200)",
	"--c-border-inverse": "var(--c-white-300)",
	"--c-bg": "var(--c-white-900)",
	"--c-bg-inverse": "var(--c-black-900)",
};

const fonts = {
	"--ff-sans": "Inter, -apple-system, sans-serif",
	"--ff-mono": "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
};

const spaces = {
	"--s-sm": 16,
	"--s-md": 32,
	"--s-lg": 64,
};

const sizes = {
	"--s-global-nav": "232px",
	"--s-x-section-gap": "16px",
	"--s-y-section-gap": "24px",
	_sm: {
		"--s-x-section-gap": "24px",
		"--s-y-section-gap": "24px",
	},
	_md: {
		"--s-x-section-gap": "32px",
		"--s-y-section-gap": "32px",
	},
};

const levels = {
	"--l-200":
		"0px 1px 16px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.24)",
};

export const TOKENS = {
	...colors,
	...semanticColors,
	...fonts,
	...spaces,
	...sizes,
	...levels,
};
