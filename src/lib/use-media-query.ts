import { useEffect, useState } from "react";
import { createMediaQueries } from ".";
import { breakpoints } from "../components/sys/tokens";

const mq = createMediaQueries(breakpoints);

export const useMediaQuery = (query: string) => {
	const [match, setMatch] = useState(false);

	useEffect(() => {
		const queryToMatch = mq.bps[query].replace("@media ", "") || query;

		const media = window.matchMedia(queryToMatch);
		if (media.matches !== match) setMatch(media.matches);

		const listener = () => setMatch(media.matches);
		media.addEventListener("change", listener);

		return () => media.removeEventListener("change", listener);
	}, [match, query]);
	return match;
};
