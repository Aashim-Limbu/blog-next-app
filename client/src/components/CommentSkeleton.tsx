import React from "react";

export default function CommentSkeleton() {
  return (
		<div
			role="status"
			className="animate-pulse bg-white rounded-md w-full flex flex-col p-2"
		>
			<div className="h-6 bg-gray-200 rounded-full max-w-60 mb-4"></div>
			<div className="h-2 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
			<div className="h-2 bg-gray-200 flex-1 rounded-full max-w-full"></div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
