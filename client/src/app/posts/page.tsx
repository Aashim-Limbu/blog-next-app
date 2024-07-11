import React, { Suspense } from "react";
import { Post } from "@/types/post";
import Button from "@/components/Button";
import Link from "next/link";
import { getPosts } from "../../api/Post.api";
import Loading from "../../components/cardloading";
function page() {
	return (
		<>
			<div className="font-semibold text-xl py-2">Posts:</div>
			<Suspense fallback={<Loading count={6} />}>
				<PostList />
			</Suspense>
		</>
	);
}
async function PostList() {
	const posts = await getPosts<Post[]>();
	return (
		<div className="grid grid-cols-2 gap-2">
			{posts.map((post) => (
				<div
					className="bg-white grid grid-template-rows: 1fr 1fr 1fr 1fr rounded-md shadow-md"
					key={post.id}
				>
					<div className="text-xl px-5 py-4 self-center text-ellipsis overflow-hidden whitespace-nowrap capitalize font-semibold">
						{post.title}
					</div>
					<div className="h-1 w-full bg-slate-300"></div>
					<div className="px-5 leading-6 py-4">{post.body}</div>
					<div className="justify-self-end self-end p-2">
						<Button type="button">
							<Link href={`posts/${post.id}`}>View Post</Link>
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}

export default page;
