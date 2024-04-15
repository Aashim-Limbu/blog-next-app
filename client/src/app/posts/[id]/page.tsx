import { Comment } from "@/types/comment";
import { Post } from "@/types/post";
import React, { Suspense } from "react";
import { getComments } from "../../../api/Comment.api";
import { getPost } from "../../../api/Post.api";
import { getUser } from "@/api/User.api";
import { User } from "@/types/user";
import Link from "next/link";
import PostSkeleton from "@/components/PostSkeleton";
import CommentLoading from "@/components/commentLoading";
export default async function page({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div className="bg-slate-200 flex-1 px-2 py-2">
            <Suspense fallback={<PostSkeleton/>}>
            <GetPostDetails id={id}/>
            </Suspense>
			<div className="grid grid-cols-1 gap-4 pt-4">
				<div className="font-semibold text-2xl">Comments:</div>
                <Suspense fallback={<CommentLoading count={6}/>}>
                    <GetComments id={id}/>
                </Suspense>
			</div>
		</div>
	);
}
async function GetPostDetails({id}:{id:string}){
	const post = await getPost<Post>(id);
    const user = await getUser<User>(`${post.userId}`);
    return (
			<>
				<h1 className="text-2xl font-semibold capitalize border-b-2  border-slate-400 py-4">
					{post.title}
				</h1>
				<div className="py-2">{post.body}</div>
				<div>
					<span className="font-semibold pr-2">By-</span>
					<span className="font-semibold text-xl text-gray-600 underline cursor-pointer transition-colors ease-in-out delay-75 hover:text-black">
						<Link href={`/users/${post.userId}`}>{user.name}</Link>
					</span>
				</div>
			</>
		);
}
async function GetComments({id}:{id:string}){
    const comments = await getComments<Comment[]>(`${id}`);
    return (
			<>
				{comments.map((comment) => (
					<div className="bg-white rounded-md p-2" key={comment.id}>
						<div className="italic text-gray-500 text-sm">{comment.email}</div>
						<div className="text-xl leading-8">{comment.body}</div>
					</div>
				))}
			</>
		);
}
