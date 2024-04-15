import React from "react";

export default function PostSkeleton() {
	return (
		<div className="grid grid-cols-1">
			<div
				role="status"
				className="animate-pulse rounded-md w-full flex  flex-col p-2"
			>
				<div className="h-6 bg-slate-400 rounded-full max-w-[70%] mb-4"></div>
				<div className="h-4 bg-slate-400 rounded-full max-w-full mb-2.5"></div>
				<div className="h-4 bg-slate-400 rounded-full max-w-full mb-2.5"></div>
				<div className="h-6 bg-slate-400 rounded-full max-w-[20%] mb-2.5"></div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
