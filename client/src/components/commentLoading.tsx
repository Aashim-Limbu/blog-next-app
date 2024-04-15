import React from "react";
import CommentSkeleton from "./CommentSkeleton";

function CommentLoading({ count }: { count: number }) {
	const skeletons = Array.from({ length: count }, (_, index) => (
		<CommentSkeleton key={index} />
	));

	return <div className="grid grid-cols-1 gap-2">{skeletons}</div>;
}

export default CommentLoading;
