export const changeCase = (string: string, param: "pascal" | "title") => {
	const changed = string.replace(
		/\w+/g,
		(w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
	);

	if (param === "pascal") return changed.replace("-", "");
	if (param === "title") return changed.replace("-", " ");
};
