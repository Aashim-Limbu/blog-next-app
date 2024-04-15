import React from "react";

export default function Skeleton() {
	return (
		<div
			role="status"
			className="animate-pulse bg-white rounded-md w-full flex  flex-col p-2"
		>
			<div className="h-6 bg-gray-200 rounded-full max-w-full mb-4"></div>
			<div className="h-2 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
			<div className="h-2 bg-gray-200 flex-1 rounded-full max-w-full"></div>
			<div className="h-8 self-end rounded-md my-2 w-20 bg-gray-200 dark:bg-gray-300"></div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
