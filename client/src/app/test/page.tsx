"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Test() {
	const searchParams = useSearchParams();
	const router = useRouter();
    const pathname = usePathname()
	console.log();
	return (
		<>
			<input
				value={searchParams.get("q") || ""}
				onChange={(e) => {
					const searchParamQuery = new URLSearchParams(searchParams.toString());
					searchParamQuery.set("q", e.target.value);
					router.push(pathname+'?'+searchParamQuery.toString());
				}}
			/>
		</>
	);
}
