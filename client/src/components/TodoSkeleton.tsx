import React from "react";

export default function TodoSkeleton() {
  return (
		<div className="flex w-full">
			<div
				role="status"
				className="animate-pulse flex flex-col gap-5 rounded-md w-full p-2"
			>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<div className="h-4 bg-slate-400 max-w-full"></div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
