"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Suspense } from "react";

export default function Page() {
	return (
		<>
			<Suspense fallback={"Loading.."}>
				<Search />
			</Suspense>
		</>
	);
}

async function Search() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParam = useSearchParams();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		const queryInput = new URLSearchParams(searchParam);
		if (inputValue) {
			queryInput.set("query", inputValue);
		} else {
			queryInput.delete("query");
		}
		router.push(`${pathname}?${queryInput.toString()}`);
	};


	return (
		<input
			type="text"
			value={searchParam.get("query") || ""}
			onChange={handleChange}
		/>
	);
}

