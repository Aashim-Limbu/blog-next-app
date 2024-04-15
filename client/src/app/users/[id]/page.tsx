import { getUserTodo } from "@/api/Todo.api";
import { getUser, getUserPost } from "@/api/User.api";
import Button from "@/components/Button";
import Loading from "@/components/cardloading";
import TodoSkeleton from "@/components/TodoSkeleton";
import UserSkeleton from "@/components/UserSkeleton";
import { Post } from "@/types/post";
import { Todo } from "@/types/todo";
import { User } from "@/types/user";
import Link from "next/link";
import React, { Suspense } from "react";
export default async function page({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div className="bg-slate-200 p-2">
			<Suspense fallback={<UserSkeleton />}>
				<GetUserDetail id={id} />
			</Suspense>
			<h1 className="text-2xl font-semibold py-2">Posts:</h1>
			<Suspense fallback={<Loading count={6} />}>
				<PostLists id={id} />
			</Suspense>
			<h1 className="text-2xl font-semibold py-2">Todos:</h1>
			<Suspense fallback={<TodoSkeleton />}>
				<TodoLists id={id} />
			</Suspense>
		</div>
	);
}
async function GetUserDetail({ id }: { id: string }) {
	const user = await getUser<User>(id);
	return (
		<>
			<h1 className="text-2xl font-bold">{user.name}</h1>
			<p>
				<span className="font-semibold">Email: </span>
				{user.email}
			</p>
			<div>
				<p>
					<span className="font-semibold">Company: </span>
					{user.company.name}
				</p>
				<p>
					<span className="font-semibold">Website: </span>
					{user.website}
				</p>
				<p>
					<span className="font-semibold">Address: </span>
					{user.address.city}
				</p>
			</div>
		</>
	);
}
async function PostLists({ id }: { id: string }) {
	const posts = await getUserPost<Post[]>(id);
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
async function TodoLists({ id }: { id: string }) {
    const todos = await getUserTodo<Todo[]>(`${id}`);
	return (
		<ul className="pl-4 list-disc text-slate-700 text-lg">
			{todos.map((todo) => (
				<li className={`${todo.completed && "line-through"}`} key={todo.id}>
					{todo.title}
				</li>
			))}
		</ul>
	);
}
