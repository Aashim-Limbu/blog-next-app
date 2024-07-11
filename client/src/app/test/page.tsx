"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
	ChangeEvent,
	HTMLInputTypeAttribute,
	useEffect,
	useState,
} from "react";

export default function Page() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParam = useSearchParams();

	const [query, setQuery] = useState(searchParam.get("query") || "");

	// useEffect(() => {
	// 	const queryString = searchParam.get("query") || "";
	// 	if (queryString !== query) {
	// 		setQuery(queryString);
	// 	}
	// }, [searchParam]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setQuery(inputValue);

		const queryInput = new URLSearchParams(searchParam);    //doing this we can use the method of .get .set .delete and other stuff etc
		if (inputValue) {
			queryInput.set("query", inputValue);
		} else {
			queryInput.delete("query");
		}
		router.push(`${pathname}?${queryInput.toString()}`);
	};

	return (
		<>
			<input type="text" value={query} onChange={handleChange} />
		</>
	);
}
