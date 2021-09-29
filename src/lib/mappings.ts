import { setProperty, setFlexGroup } from ".";

const pairs = [
	["fg", "color"],
	["bg", "background"],
	["w", "width"],
	["minw", "minWidth"],
	["maxw", "maxWidth"],
	["h", "height"],
	["minh", "minHeight"],
	["maxh", "maxHeight"],
	["p", "padding"],
	["pt", "paddingTop"],
	["pr", "paddingRight"],
	["pb", "paddingBottom"],
	["pl", "paddingLeft"],
	["m", "margin"],
	["mt", "marginTop"],
	["mr", "marginRight"],
	["mb", "marginBottom"],
	["ml", "marginLeft"],
	["b", "border"],
	["bc", "borderColor"],
	["ra", "borderRadius"],
	["bt", "borderTop"],
	["br", "borderRight"],
	["bb", "borderBottom"],
	["bl", "borderLeft"],
	["pos", "position"],
	["z", "zIndex"],
	["fill", "fill"],
	["stroke", "stroke"],
];

const base = pairs.map((pair) => {
	return {
		key: pair[0],
		value: (val) => setProperty(pair[1], val),
	};
});

const flexes = {
	key: "flexes",
	value: (val) => setFlexGroup(val),
};

const size = () => {
	return [
		{
			key: "s",
			value: (val) => {
				return {
					...setProperty("width", val),
					...setProperty("height", val),
				};
			},
		},
		{
			key: "mins",
			value: (val) => {
				return {
					...setProperty("minWidth", val),
					...setProperty("minHeight", val),
				};
			},
		},
		{
			key: "maxs",
			value: (val) => {
				return {
					...setProperty("maxWidth", val),
					...setProperty("maxHeight", val),
				};
			},
		},
	];
};

const spacings = (prop) => {
	return [
		{
			key: `${prop[0]}y`,
			value: (val) => {
				return {
					...setProperty(`${prop}Top`, val),
					...setProperty(`${prop}Bottom`, val),
				};
			},
		},
		{
			key: `${prop[0]}x`,
			value: (val) => {
				return {
					...setProperty(`${prop}Left`, val),
					...setProperty(`${prop}Right`, val),
				};
			},
		},
	];
};

export const mappings = [
	...base,
	...size(),
	flexes,
	...spacings("padding"),
	...spacings("margin"),
];
